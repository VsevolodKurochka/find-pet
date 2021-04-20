import {Schema, Types} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    name: String,
    roles: [{
        type: Types.ObjectId, ref: 'Role', index: true, default: []
    }],
    animals: [{
        type: Types.ObjectId, ref: 'Animal', index: true, default: []
    }]
});

export {
    UserSchema
};
