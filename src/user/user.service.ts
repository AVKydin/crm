import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Students } from './schemas/students.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Students.name)
    private studentsModel: Model<Students>,
  ) {}
  async getAllUsers() {
    return await this.studentsModel.find();
  }
}
