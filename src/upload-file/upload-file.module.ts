import { Module } from '@nestjs/common';
import { UploadeFileService } from './upload-file.service';

@Module({
  providers: [UploadeFileService],
  exports: [UploadeFileService],
})
export class UploadFileModule {}
