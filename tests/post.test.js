'use strict'

const request = require('supertest');
const app = 'http://localhost:3000'

describe('testing posting service', () => {
    test('get all post', async (done) => {
        const res = await request(app).get('/posts/');

        expect(res.status).toEqual(200)
        expect(res.body).toBe(res.body)
        done();
    });

    test('get post by id', async (done) => {
        const res = await request(app).get(`/posts/${1}`);

        expect(res.status).toEqual(200)
        expect(res.body).toBe(res.body)
        done()
    });

    test('create a new post', async (done) => {
        const res = await request(app).post('/posts').send({
            title: 'test2',
            description: 'hallo ini test'
        });

        expect(res.status).toEqual(200);
        expect(res.body).toBe(res.body);
        done();
    });

    test('update a post', async (done) => {
        const res = await request(app).put(`/posts/${1}`).send({
            title: 'update test',
            description: 'hallo ini update test'
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual({message: "post has been updated"});
        done();
    });

    test('delete a post', async (done) => {
        const res = await request(app).delete(`/posts/${7}`);

        expect(res.status).toEqual(200);
        expect(res.body).toEqual({message: "post has been deleted"});
        done();
    })
});