import express from 'express'
import cors from 'cors'
import db from './data/data.json' with {type: 'json'}

const app = express()
app.use(cors())
// app.use(myCors)
const PORT = 9898

app.get('/hersteller/:id', (req, res) => {
    const id = Number(req.params.id)
    const erg = db.hersteller.filter(ele => ele.id === id)
    console.log(erg)
    res.json(erg[0])
})
app.get('/kategorie/:id', (req, res) => {
    const id = Number(req.params.id)
    const erg = db.kategorien.filter(ele => ele.id === id)
    res.json(erg[0])
})
app.get('/produkte', (req, res) => {
    res.json(db.produkte)
})
app.post('/produkte', (req, res) => {
    res.json(db.produkte)
})


app.listen(PORT, () => console.log(`Server runs on Port: ${PORT}`))

// function myCors(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,DELETE,OPTIONS")
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

//     if (req.method === "OPTIONS") {
//         return res.sendStatus(204) // no-content
//     }

//     next()
// }