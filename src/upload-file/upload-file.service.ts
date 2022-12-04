import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadeFileService {
  async getAvatarUrl() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return 'https://image-upload.im';
  }
}
