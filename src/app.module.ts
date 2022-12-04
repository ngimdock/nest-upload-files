import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MulterModule.register({}), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
