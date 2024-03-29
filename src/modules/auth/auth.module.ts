import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies /accessToken.strategy';
import { RefreshTokenStrategy } from './strategies /refreshToken.strategy';
import { Leader, LeaderSchema } from './entities/leader.entity';

@Module({
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: Leader.name, schema: LeaderSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [AuthService],
})
export class AuthModule {}
