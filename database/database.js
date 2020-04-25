const knex = require('knex');

require('dotenv').config()

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    },
    pool: {
        min: 0,
        max: 10
    }
})

module.exports = db