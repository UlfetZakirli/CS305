const express = require('express')
const bodyParser = require('body-parser')
require('colors')
const { v4: uuid } = require('uuid');

const app = express()
app.use(bodyParser.json())

let users = [
    {
        id: 1,
        username: 'Nihad'
    },
    {
        id: 2,
        username: 'Sabir'
    },
    {
        id: 3,
        username: 'Fatime'
    },
    {
        id: 4,
        username: 'Mehman'
    },
]

// Get all users
app.get('/', (req, res) => {
    res.status(200).json(users)
})

// Get only a user by id
app.get('/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json('User not found with the given Id !!!')
    }
})

// Create a user
app.post('/', (req, res) => {
    const userBody = req.body
    // users.push({ ...userBody, id: uuid() })
    users.push(userBody)
    res.status(201).json('User has been created successfully!')
})

// Delete a user by id
app.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.status(200).json(`User with ID:${id} has been deleted succesfully!`)
})

const PORT = 5000
app.listen((PORT), () => console.log(`Server is running: http://localhost:${PORT}`.bold.green))
// node index.js
// Ctrl+C (to take off server)