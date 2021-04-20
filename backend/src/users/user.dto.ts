import {Document} from "mongoose";
import {RolesDto} from '../roles/roles.dto';

export interface UserDto {
    email: string;
    password: string;
    roles: RolesDto[];
    animals: [];
}

export interface AddUserRoleDto {
    value: string;
    userId: string;
}

export interface UserInterface extends Document {
    readonly email: string;
    readonly password: string;
    readonly roles: RolesDto[];
    readonly animals: [];
}