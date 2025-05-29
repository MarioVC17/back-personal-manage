import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/persons')
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {}
    
    @Post()
    create(@Body() createPersonDto: CreatePersonDto) {
        return this.personsService.create(createPersonDto);
    }

    @Get()
    findAll(@Query('page') page: string, @Query('limit') limit: string) {
        return this.personsService.findAll(parseInt(page), parseInt(limit));
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.personsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
        return this.personsService.update(id, updatePersonDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.personsService.remove(id);
    }
}
