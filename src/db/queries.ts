import { QueryResult, Pool } from "pg";
import { Request, Response } from "express";

type userQuery = {
    resultId: number
}


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432
})

const getUsers = (request: Request, response: Response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err: Error, result: QueryResult<any>) => {
        if (err) {
            response.status(500)
            throw err
        }
        response.status(200).json(result.rows)
    })

}

const getUserById = (request: Request, response: Response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (err: Error, result: QueryResult<any>) => {
        if (err) {
            response.status(500)
            throw err
        }
        response.status(200).json(result.rows)
    })
}

const createUser = (request: Request, response: Response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err: Error, result: QueryResult<userQuery>) => {
        if (err) {
            response.status(500)
            throw err
        }
            response.status(201).send(`User added with ID: ${result.rows[0].resultId}`)
    })
}

const updateUser = (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (err, result) => {
            if (err) {
                response.status(500)
                throw err
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request: Request, response: Response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error: Error, result:QueryResult<any>) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
