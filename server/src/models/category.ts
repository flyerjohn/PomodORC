
import {Schema, model} from 'mongoose'

const CategorySchema= new Schema({
    tasks:[{
        type: Schema.Types.ObjectId,
        ref: "Task",
    }],
   
    checked:{
        type: Boolean,
        required: true,
        select: false,
    },
    
});


export default model("Category", CategorySchema);