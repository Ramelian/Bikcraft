import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        required: true,
        type: Number,
    },
    description: String,
    speed: {
        required: true,
        type: Number,
    },
    target:{
        type: String,
        required: true
    },
    weight: {
        required: true,
        type: Number,
    },
    height: {
        required: true,
        type: Number,
    },
    width: {
        required: true,
        type: Number,
    },
    marches: {
        required: true,
        type: Number,
    },
    wheel: {
        required: true,
        type: Number,
    },
    motor:{
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Bike", BikeSchema);