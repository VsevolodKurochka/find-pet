import {model, Schema} from 'mongoose';

const RolesSchema = new Schema({
    value: String,
    description: String
});

const RolesModel = model('Role', RolesSchema);

export {
    RolesModel,
    RolesSchema
};
