const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, year} = req.body
        const newt_movies = await db.query(`INSERT INTO t_movies (name, year) values ($1, $2) RETURNING *`, [name, year])

        res.json(newt_movies.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('select * FROM t_movies')
        res.json(users.rows)    
    } 
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('select * FROM t_movies where id = $1', [id])
        res.json(user.rows[0])
    }  
    async updateUser(req, res) {
        const {id, name, year} = req.body
        const user = await db.query('UPDATE t_movies set name = $1, year = $2 where id = $3 RETURNING *', 
        [name, year, id]
        )
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM t_movies where id = $1', [id])
        res.json(user.rows[0])
    }     
}

module.exports = new UserController()