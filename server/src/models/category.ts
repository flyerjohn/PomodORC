
import {Schema, model} from 'mongoose'

const CategorySchema= new Schema({
    name: {
    type: String,
    required: true
    },
    tasks:[{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
   
    checked:{
        type: Boolean,
        default: false
    },
    
});


export default model("Category", CategorySchema);