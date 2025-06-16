import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

const CubeSchema = new mongoose.Schema({
    name: String
});

export let Cube = mongoose.model('Cube', CubeSchema);