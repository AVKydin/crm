import { Injectable } from '@nestjs/common';

import { AuthService } from '../../auth/auth.service';
import { ManagerCreateReqDto } from './dto/manager-create-req.dto';

@Injectable()
export class AdminService {
  constructor(private readonly authService: AuthService) {}

  async createManager(dto: ManagerCreateReqDto): Promise<void> {
    // dto.password = await bcrypt.hash(dto.password, this.salt);
    // await this.userService.createUser(dto);
    // throw new HttpException('Manager register', HttpStatus.OK);
  }
}
