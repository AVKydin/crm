import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StudentsService } from './students.service';

@ApiTags('Students')
@Controller('student')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
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
