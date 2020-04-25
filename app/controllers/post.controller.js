'use strict'

const postService = require('../services/post.services')

async function getAllPost(req, res) {
    try {
        const post = await postService.getAllPost();

        if(post[0] == null) {
            return res.status(404).send({message: "Posts not found"});
        }

        return res.status(200).send(post);
    }catch(error) {
        throw error
    }
}

async function getPostById(req, res) {
    try {
        const { id } = req.params;

        const post = await postService.getPostById(id);

        if(post == null) {
            return res.status(404).send({message: "Posts not found"});
        }

        return res.status(200).send(post);
    }catch(error) {
        throw error
    }
}

async function createPost(req, res) {
    try {
        const { title, description } = req.body;

        if(title == null || description == null) {
            return res.status(400).send({message: "title or description is must required"});
        }

        const post = await postService.createPost(title, description);

        return res.status(200).send(post);
    }catch(error) {
        throw error;
    }
}

async function updatePost(req, res) {
    try {
        const { id } = req.params;

        const { title, description } = req.body;

        const checkPost = await postService.getPostById(id);

        if(checkPost == null) {
            return res.status(404).send({message: "post not found"});
        }

        if(title == null || description == null) {
            return res.status(400).send({message: "title or description is must required"});
        }

        await postService.updatePost(id, title, description);

        return res.status(200).send({message: "post has been updated"});
    }catch(error) {
        throw error;
    }
}

async function deletePost(req, res) {
    try {
        const { id } = req.params;

        const checkPost = await postService.getPostById(id);

        if(checkPost == null) {
            return res.status(404).send({message: "post not found"});
        }

        await postService.deletePost(id);

        return res.status(200).send({message: "post has been deleted"});
    }catch(error) {
        throw error;
    }
}

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
}