import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './modules/auth/auth.module';
import { LeadersModule } from './modules/leaders/leaders.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
    StudentsModule,
    AuthModule,
    LeadersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
