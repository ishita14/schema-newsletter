const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types 


const postnewsLetterSchema = new mongoose.Schema({


    email: {
        type: ObjectId,  
        ref: "User"
    },
    NewsletterName : {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    time : { type : Date,
         default: Date.now 
        }
   
})

mongoose.model("Post", postnewsLetterSchema)