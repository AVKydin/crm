import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { ExtractJwt } from 'passport-jwt';
import * as process from 'process';

import { AuthService } from './auth.service';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(token: string): Promise<any> {
    let user: any;
    try {
      const payload = await this.jwtService.verify(token);
      user = await this.authService.getById(payload.id);
    } catch (e) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
