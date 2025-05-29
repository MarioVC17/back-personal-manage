import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PersonsModule } from './persons/persons.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    AuthModule,
    PersonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
