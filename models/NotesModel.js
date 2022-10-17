const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const noteSchema = new mongoose.Schema({
    noteTitle:{
        type: String,
        required: true,
        lowercase: true
    },
    noteDesctiption:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    dateAdded:{
        type: Date, 
        default: Date
    },
    dateUpdated:{
        type: Date, 
        default: Date
    }

})

module.exports = mongoose.model("NotesModel", noteSchema)
