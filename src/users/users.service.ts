import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async updateAvatar(userId: number, newAvatar: any) {
    const data = { uid: userId, newAvatar };
    return data;
  }
}
