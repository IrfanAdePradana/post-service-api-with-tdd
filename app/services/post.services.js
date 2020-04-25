'use strict'

const Post = require('../models/post.model')

async function getAllPost() {
    try {
        const post = await Post.query().where('is_deleted', 0);

        return post;
    }catch(error) {
        throw error;
    }
}

async function getPostById(id) {
    try {
        const post = await Post.query().findOne({'id': id,'is_deleted': 0});

        return post;
    }catch(error) {
        throw error;
    }
}

async function createPost(title, description) {
    try {
        const post = await Post.query().insert({title: title, description: description});

        return post;
    }catch(error) {
        throw error;
    }
}

async function updatePost(id, title, description) {
    try {
        const post = await Post.query().update({title: title, description: description}).where({id: id, is_deleted: 0});

        return post;
    }catch(error) {
        throw error;
    }
}

async function deletePost(id) {
    try {
        const post = await Post.query().update({is_deleted: 1}).where({id: id, is_deleted: 0});

        return post;
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