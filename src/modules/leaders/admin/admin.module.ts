import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Leaders, LeadersSchema } from '../../../database/schemas/leaders.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leaders.name, schema: LeadersSchema }]),
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
