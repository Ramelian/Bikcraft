import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {        
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    },
    phone:{
        type: String,
        required: true,
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Please fill a valid phone"],
    },
    message:{
        type:String,
        required: true,
    }
    
}, {
    timestamps: true
});

export default mongoose.model("Contact", ContactSchema);