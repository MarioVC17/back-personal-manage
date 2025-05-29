import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports : [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
        })
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
