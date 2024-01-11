import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

import { ERole } from '../../../common/enum /role.enum';

export type LeaderDocument = HydratedDocument<Leader>;

@Schema()
export class Leader {
  @ApiProperty({ description: 'Username', example: 'Maks' })
  @Prop({ required: true, unique: true })
  username: string;

  @ApiProperty({ description: 'Email', example: 'maks@gmail.com' })
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: String, enum: Object.values(ERole), required: true })
  role: ERole;

  @ApiProperty({ description: 'Password hash', example: 'UserPassword' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({
    description: 'Refresh token hash',
    example: 'hashedRefreshToken',
  })
  @Prop()
  hashedRefreshToken: string;

  @ApiProperty({ description: 'Created at', example: 'Date of create' })
  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const LeaderSchema = SchemaFactory.createForClass(Leader);
