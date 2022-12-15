import { Injectable } from '@nestjs/common';
import { GoogleDriveService } from 'nestjs-google-drive';

@Injectable()
export class UsersService {
  constructor(private readonly googleDriveService: GoogleDriveService) {}

  async updateAvatar(userId: number, file: Express.Multer.File) {
    const GOOGLE_FOLDER_ID = '1nrvE1mTi-35NsrswB2dfKjrPpj4SZiDg';

    const avatarUrl = await this.googleDriveService.uploadFile(
      file,
      GOOGLE_FOLDER_ID,
    );
    return { avatarUrl };
  }
}
