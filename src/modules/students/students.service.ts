import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Students } from '../../database/schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Students.name)
    private studentsModel: Model<Students>,
  ) {}
  async getAllStudents() {
    return await this.studentsModel.find();
  }
}
