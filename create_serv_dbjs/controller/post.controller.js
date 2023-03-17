const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {genre, movie_id} = req.body
        const newt_gerne = await db.query(`INSERT INTO t_genre (genre, movie_id) values ($1, $2) RETURNING *`, [genre, movie_id])
        res.json(newt_gerne.rows[0])
    }

    async createPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('select * from t_genre where movie_id = $1', [id])
        res.json(posts.rows)
    }

}

module.exports = new PostController()