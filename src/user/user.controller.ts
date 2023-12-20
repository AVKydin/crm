import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':userId')
  async getUserById() {}

  @Post()
  async createUser() {}

  @Patch(':userId')
  async updateUser() {}

  @Delete(':userId')
  async deleteUser() {}
}
