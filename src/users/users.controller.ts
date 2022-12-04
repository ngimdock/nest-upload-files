import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileExtensionValidation } from 'src/upload-file/pipes';
import { UploadOperations } from 'src/upload-file/utils';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('update/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: UploadOperations.getDestination,
        filename: UploadOperations.getFilename,
      }),
    }),
  )
  async updateAvatar(
    @UploadedFile(FileExtensionValidation) file: Express.Multer.File,
  ) {
    const userId = 1;

    return this.usersService.updateAvatar(userId, file);
  }
}
