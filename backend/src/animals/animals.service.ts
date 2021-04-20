import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose";
import {AnimalsInterface, AnimalsDto} from './animals.dto';

@Injectable()
export class AnimalsService {
    constructor(@InjectModel('Animal') private readonly animalModel: Model<AnimalsInterface>) { }

    async getAllAnimals(): Promise<AnimalsDto[]> {
        return await this.animalModel.find().exec();
    }

    async getAnimal(id: string): Promise<AnimalsInterface> {
        return await this.animalModel.findById(id).exec();
    }

    async createAnimal(dto: AnimalsDto): Promise<AnimalsInterface> {
        return await new this.animalModel(dto).save();
    }

    async editAnimal(id: string, dto: AnimalsDto): Promise<AnimalsInterface> {
        return this.animalModel.findByIdAndUpdate(id, dto, {new: true});
    }

    async deleteAnimal(id: string): Promise<AnimalsInterface> {
        return this.animalModel.findByIdAndRemove(id);
    }
}
