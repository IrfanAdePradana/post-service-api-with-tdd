'use strict'

const postController = require('../app/controllers/post.controller')

module.exports = (app) => {
    app.get('/posts/', postController.getAllPost);
    app.get('/posts/:id', postController.getPostById);
    app.post('/posts', postController.createPost);
    app.put('/posts/:id', postController.updatePost);
    app.delete('/posts/:id', postController.deletePost);
}