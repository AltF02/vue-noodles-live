import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 8383
const db = require('./db/queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded(
        { extended: true }
    )
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, express, and Postgres API'})
})

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.listen(port, () => {
    console.log(`App running on ${port}`)
})
