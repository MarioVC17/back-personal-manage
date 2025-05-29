import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async register(user: RegisterDto): Promise<User> {
        const { password, email } = user;
        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) throw new ConflictException('El correo electrónico ya está registrado');
        const plainToHash = await hash(password, 10);
        const newUser = { ...user, password: plainToHash }
        return this.userModel.create(newUser)
    }

    async login(user: LoginDto) {
        const { email, password } = user;
        const findUser = await this.userModel.findOne({ email });
        if (!findUser) throw new UnauthorizedException();
        const checkPassword = await compare(password, findUser.password);
        if (!checkPassword) throw new UnauthorizedException();
        const payload = { id: findUser._id, name: findUser.name }
        const token =  this.jwtService.sign(payload)
        const data = {
            user: findUser,
            token
        }
        return data; 
    }
}
