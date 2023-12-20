import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Students, StudentsSchema } from './schemas/students.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Students.name, schema: StudentsSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
