import {model, Schema, Types} from 'mongoose';

const AnimalSchema = new Schema({
    name: String,
    age: String,
    male: Boolean,
    city: String,
    size: String,
    description: String,
    curator: {
        type: Types.ObjectId, ref: 'User', index: true, default: {}
    }
});

const AnimalModel = model('Animal', AnimalSchema);

export {
    AnimalModel,
    AnimalSchema
};
