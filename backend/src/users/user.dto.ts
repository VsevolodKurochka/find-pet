import {Document} from "mongoose";
import {RolesDto} from '../roles/roles.dto';
import {AnimalsDto} from '../animals/animals.dto';

export interface CreateUserDto {
    phone: string;
    name: string;
    email: string;
    password: string;
}

export interface UserDto {
    phone: string;
    name: string;
    email: string;
    password: string;
    roles: RolesDto[];
    animals: AnimalsDto[];
}

export interface AddUserRoleDto {
    value: string;
    userId: string;
}

export interface AddUserAnimalDto {
    animalId: string;
    userId: string;
}

export interface UserInterface extends Document {
    readonly phone: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly roles: RolesDto[];
    readonly animals: AnimalsDto[];
}