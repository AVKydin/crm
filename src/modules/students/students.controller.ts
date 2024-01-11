import { Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';

import { StudentsService } from './students.service';
import { AccessTokenGuard } from '../../common/guards/access-token-guard';

@ApiTags('Students')
@Controller('student')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiBearerAuth()
  @ApiSecurity('bearer')
  @UseGuards(AccessTokenGuard)
  @Get('')
  async getAllStudents() {
    return await this.studentsService.getAllStudents();
  }

  @Get(':studentId')
  async getStudentById() {}

  @Post()
  async createStudent() {}

  @Patch(':studentId')
  async updateStudent() {}

  @Delete(':studentsId')
  async deleteStudent() {}
}
