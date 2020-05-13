const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{ 
        type: Number,
        trim: true,
        required: true,
        unique : true
    },
    name:{ 
        type: String,
        trim: true,
        required: true
    },
    username:{ 
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User