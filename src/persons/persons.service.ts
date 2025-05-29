import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './schemas/person.schema';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
    constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

    async create(createPersonDto: CreatePersonDto): Promise<Person> {
        const createdPerson = new this.personModel(createPersonDto);
        return createdPerson.save();
    }

    async findAll(page: number = 1, limit: number = 10): Promise<Person[]> {
        const skip = (page - 1) * limit;
        return this.personModel.find().skip(skip).limit(limit).exec();
    } 

    async findOne(id: string): Promise<Person> {
        const person = await this.personModel.findById(id).exec();
        if(!person) throw new NotFoundException(`Persona con ID "${id}" no encontrada`);
        return person;
    }

    async update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person> {
        const updatedPerson = await this.personModel.findByIdAndUpdate(id, updatePersonDto, { new: true }).exec();
        if(!updatedPerson) throw new NotFoundException(`Persona con ID "${id}" no encontrada`);
        return updatedPerson;
    }

    async remove(id: string): Promise<void> {
        const result = await this.personModel.findByIdAndDelete(id).exec();
        if(!result) throw new NotFoundException(`Persona con ID "${id}" no encontrada`);
    }
}
