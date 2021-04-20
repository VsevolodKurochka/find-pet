import {Document} from "mongoose";
import {UserDto} from '../users/user.dto';

export interface AnimalsDto {
    name: string,
    age: string,
    male: string,
    city: string,
    size: string,
    description: string,
    curator: UserDto,
    images: []
}

export interface AnimalsInterface extends Document {
    readonly name: string,
    readonly age: string,
    readonly male: string,
    readonly city: string,
    readonly size: string,
    readonly description: string,
    readonly curator: UserDto,
    readonly images: []
}