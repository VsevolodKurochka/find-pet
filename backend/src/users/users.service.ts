import { Injectable } from '@nestjs/common';
import {UserDto} from './user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {UserInterface} from './user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) { }

    async getUsers(): Promise<UserDto[]> {
        return await this.userModel.find().exec();
    }

    async getUser(id: string): Promise<UserInterface> {
        return await this.userModel.findById(id).exec();
    }

    async createUser(userDto: UserDto): Promise<UserInterface> {
        return await new this.userModel(userDto).save();
    }

    async editUser(id: string, userDto: UserDto): Promise<UserInterface> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
    }

    async deleteUser(id: string): Promise<UserInterface> {
        return this.userModel.findByIdAndRemove(id);
    }
}
