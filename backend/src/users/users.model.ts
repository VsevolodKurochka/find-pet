import {model, Schema} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = model('User', UserSchema);

export {
    UserModel,
    UserSchema
};
