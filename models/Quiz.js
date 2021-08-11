const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizSchema = new Schema ({
    title: String,
    category: String,
    level: String,
    description: String,
    image: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }], 
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            },
        username: String
    },
    public: { type: Boolean, default: false },
    bin: { type: Boolean, default: false },
    favorite: { type: Boolean, default: false },
    dateCreated: Date,
    lastUpdated: Date 
});

module.exports = mongoose.model('Quiz', quizSchema);