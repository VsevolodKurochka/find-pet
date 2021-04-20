import {Document} from "mongoose";

export interface RolesDto {
    value: string,
    description: string
}

export interface RolesInterface extends Document {
    readonly value: string;
    readonly description: string;
}