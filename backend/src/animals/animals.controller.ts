import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ValidateObjectId} from '../pipes/validate-object-id.pipes';
import {AnimalsService} from './animals.service';
import {AnimalsDto} from './animals.dto';

@Controller('animals')
export class AnimalsController {
    constructor(private animalService: AnimalsService) {
    }

    @Get()
    getAllAnimals() {
        return this.animalService.getAllAnimals();
    }

    @Post()
    createAnimal(@Body() dto: AnimalsDto){
        return this.animalService.createAnimal(dto);
    }

    @Get('/:id')
    getAnimal(@Param('id', new ValidateObjectId()) id: string) {
        const animal = this.animalService.getAnimal(id);
        if (!animal) throw new NotFoundException('animal_not_found');
        return animal;
    }

    @Put('/:id')
    editAnimal(@Param('id', new ValidateObjectId()) id: string, @Body() dto: AnimalsDto){
        const animal = this.animalService.editAnimal(id, dto);
        if (!animal) throw new NotFoundException('animal_not_found');

        return animal;
    }

    @Delete('/:id')
    async deleteAnimal(@Param('id', new ValidateObjectId()) id: string){
        const animal = await this.animalService.deleteAnimal(id);
        if (!animal) throw new NotFoundException('animal_not_found');

        return animal;
    }
}
