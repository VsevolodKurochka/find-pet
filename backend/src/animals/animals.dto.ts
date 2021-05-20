import {Document} from "mongoose";
import {UserDto} from '../users/user.dto';

export interface AnimalsDto {
    name: string,
    age: string,
    male: boolean,
    city: string,
    description: string,
    sterilized: boolean,
    curator: string,
    images: []
}

export interface AnimalsInterface extends Document {
    readonly name: string,
    readonly age: string,
    readonly male: boolean,
    readonly city: string,
    readonly size: string,
    readonly sterilized: boolean,
    readonly description: string,
    readonly curator: string,
    readonly images: []
}