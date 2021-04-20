import {Schema, Types} from 'mongoose';

const AnimalSchema = new Schema({
    name: String,
    age: String,
    male: Boolean,
    city: String,
    size: String,
    description: String,
    images: {
        type: Array,
        default: []
    },
    curator: {
        type: Types.ObjectId, ref: 'User', index: true, default: {}
    }
});

export {
    AnimalSchema
};
