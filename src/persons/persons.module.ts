import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './schemas/person.schema';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
        JwtModule
    ],
    providers: [PersonsService],
    controllers: [PersonsController],
})
export class PersonsModule {}
