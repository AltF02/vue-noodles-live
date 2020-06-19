const Pool = require('pg').Pool
const secret = require('secret/secret')
const pool = new Pool({
    user: secret.user,
    host: secret.host,
    database: secret.database,
    password: secret.password,
    port: secret.port
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, result) => {
        if (err) {
            response.status(500)
            throw err
        }
        response.status(200).json(result.rows)
    })

}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (err, result) => {
        if (err) {
            response.status(500)
            throw err
        }
        response.status(200).json(result.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, result) => {
        if (err) {
            response.status(500)
            throw err
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (request, response) => {
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

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
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
