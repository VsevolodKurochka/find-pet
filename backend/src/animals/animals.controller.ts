import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {RolesDto} from '../roles/roles.dto';
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
        const role = this.animalService.getAnimal(id);
        if (!role) throw new NotFoundException('animal_not_found');
        return role;
    }

    @Put('/:id')
    editAnimal(@Param('id', new ValidateObjectId()) id: string, @Body() dto: AnimalsDto){
        const role = this.animalService.editAnimal(id, dto);
        if (!role) throw new NotFoundException('animal_not_found');

        return role;
    }

    @Delete('/:id')
    async deleteAnimal(@Param('id', new ValidateObjectId()) id: string){
        const role = await this.animalService.deleteAnimal(id);
        if (!role) throw new NotFoundException('animal_not_found');

        return role;
    }
}
