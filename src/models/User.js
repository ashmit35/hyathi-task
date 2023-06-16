import mongoose from "mongoose";
const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    myPokemons: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const collection = mongoose.model('collection', newSchema);
export default collection;