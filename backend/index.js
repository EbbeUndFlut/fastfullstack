import express from 'express'

const app = express()
const PORT = 9898


app.listen(PORT, () => console.log(`Server runs on Port: ${PORT}`))