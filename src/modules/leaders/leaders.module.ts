import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Leaders, LeadersSchema } from '../../database/schemas/leaders.schema';
import { LeadersController } from './leaders.controller';
import { LeadersService } from './leaders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leaders.name, schema: LeadersSchema }]),
  ],
  controllers: [LeadersController],
  providers: [LeadersService],
})
export class LeadersModule {}
