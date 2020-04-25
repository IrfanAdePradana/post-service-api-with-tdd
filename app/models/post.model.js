const { Model } = require('objection');
const db = require('../../database/database');

Model.knex(db);

class Post extends Model {
    static get tableName() {
        return 'posts';
    }
}

module.exports = Post