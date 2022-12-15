import { Module } from '@nestjs/common';
import { GoogleDriveModule } from 'nestjs-google-drive';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    GoogleDriveModule.register({
      clientId:
        '97213920835-rj7ftcd9k3g0u3ro8m7jd8fqsq2p2a0b.apps.googleusercontent.com',
      clientSecret: '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',
      redirectUrl: 'https://developers.google.com/oauthplayground',
      refreshToken:
        '1//0408P_pSVuuQ6CgYIARAAGAQSNwF-L9IrrA-KG011TI1Da0VZxd4XvXgZjjdhSMDinUGUo9yOOKN2Qd5wfoL6VBuUO_E_bZmxTew',
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
