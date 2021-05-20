import {Injectable, NotFoundException} from '@nestjs/common';
import {UserDto, AddUserRoleDto, UserInterface, CreateUserDto} from './user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {RolesInterface} from '../roles/roles.dto';
import {RolesService} from '../roles/roles.service';
import {RolesEnum} from '../roles/roles.enum';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserInterface>,
        private rolesService: RolesService
    ) { }

    async getUsers(): Promise<UserDto[]> {
        return await this.userModel.find().populate('animals').exec();
    }

    async getUser(id: string): Promise<UserInterface> {
        return await this.userModel.findById(id).populate('animals').exec();
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({email})
        return user;
    }

    async createUser(userDto: CreateUserDto): Promise<UserInterface> {
        const role = await this.rolesService.getRoleByValue(RolesEnum.USER);
        return await new this.userModel({...userDto, roles: [role]}).save();
    }

    async editUser(id: string, userDto: UserDto): Promise<UserInterface> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
    }

    async deleteUser(id: string): Promise<UserInterface> {
        return this.userModel.findByIdAndRemove(id);
    }

    async updateUserRole(userRoleDto: AddUserRoleDto) {
        const role = await this.rolesService.getRoleByValue(userRoleDto.value);
        const user: UserInterface = await this.userModel.findById(userRoleDto.userId);
        if (user) {
            return this.userModel.findByIdAndUpdate(userRoleDto.userId, {
                $addToSet: {
                    roles: role
                }
            }, {new: true});
        }

        throw new NotFoundException('user_not_found');
    }
}
