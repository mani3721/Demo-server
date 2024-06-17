const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },


})

const PostModel = mongoose.model("Post", PostSchema)


module.exports = PostModel;
