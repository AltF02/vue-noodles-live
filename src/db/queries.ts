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
    let limit = request.query.limit || 100;

    pool.query(`SELECT * FROM users ORDER BY id ASC LIMIT ${limit}`, (err: Error, result: QueryResult<any>) => {
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

module.exports = {
    getUsers,
    getUserById
}
