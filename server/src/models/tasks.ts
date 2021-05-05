
import {Schema, model} from 'mongoose'

const TaskSchema= new Schema({
    task:{
        type: String,
        required: true,
    },
   
    checked:{
        type: Boolean,
        default: false
    },
    
});


export default model("Task", TaskSchema);