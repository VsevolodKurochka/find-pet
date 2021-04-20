import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose";
import {RolesDto, RolesInterface} from './roles.dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel('Role') private readonly roleModel: Model<RolesInterface>) { }

    async getRoles(): Promise<RolesDto[]> {
        return await this.roleModel.find().exec();
    }

    async getRole(id: string): Promise<RolesInterface> {
        return await this.roleModel.findById(id).exec();
    }

    async getRoleByValue(value: string): Promise<RolesInterface> {
        return this.roleModel.findOne({value});
    }

    async createRole(userDto: RolesDto): Promise<RolesInterface> {
        return await new this.roleModel(userDto).save();
    }

    async editRole(id: string, userDto: RolesDto): Promise<RolesInterface> {
        return this.roleModel.findByIdAndUpdate(id, userDto, {new: true});
    }

    async deleteRole(id: string): Promise<RolesInterface> {
        return this.roleModel.findByIdAndRemove(id);
    }
}
