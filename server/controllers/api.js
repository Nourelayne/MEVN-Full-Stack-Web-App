const Post = require('../models/posts');

module.exports = class API {
    // fetch all posts
    static async fetchAllPost(req, res){
        try{
           const posts = await Post.find();
           res.status(200).json(posts);
        }catch(error){
           res.status(404).json({message: error.message})
        }
    }

    // fetch post by ID
    static async fetchPostByID(req, res){
        res.send('Fetch Post By ID');
    }

    // create a post
    static async createPost(req, res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({message: 'Post created successfully!'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    // update a post
     static async updatePost(req, res){
        res.send('update post');
    }

    // delete a post
    static async deletePost(req, res){
        res.send('delete post');
    }
}