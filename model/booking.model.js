import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
    
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
       
    },
    category:{
        type: String,
        required: true,
        enum: {
            values: ["Hall","Tent", "Decoration","Invitation","Photography"],
            message: "{values} is not a valid service category",
        },
    },
    serviceName: {
        type: String,
        require: true,
    },
    capacity: {
       type: Number,
       require: true
    },
    duration: {
        type: String,
        require: true,
        enum: {
            values: ["Part-time", "Full-time"],
            message:"{values} is not a valid duration"
        }
    },
    paymentMethod: {
        type: String,
        required: false
    }


});
 
const booking =model('booking', bookingSchema)
export default booking;

