const PostModel = require("../Models/PostModel.js");


const Post = async (req, res) => {
    const { title, description } = req.body;
    const newPost = new PostModel({
        title, description
    })
    try {

        await newPost.save();
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}



const Get = async (req, res) => {
    try {
        let post = await PostModel.find()
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);

    }
}

const Update = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
        try {
        const post= await PostModel.findById(id)
        if (post.id==_id ) {
            await post.updateOne({ $set: req.body });
           res.status(200).json(post);

        } catch (error) {
            res.status(500).json(error);
   }
    
}

const Delete = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);

        await post.deleteOne();
        res.status(200).json("Post deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

const GetOnePost = async (req, res) => {
    const id = req.params.id;
     try {
    const post = await PostModel.findById(id);
      res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { Post, Get, Update, Delete ,GetOnePost };

