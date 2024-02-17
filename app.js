const express = require("express")
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.get("/", (req, res) => {
    res.type('json')
    res.status(200)
    res.sendFile(path.join(__dirname, "db.json"))
})
app.get("/:id", (req, res) => {
    const id = req.params.id
    fs.readFile(path.join(__dirname, "db.json"), "utf8", (error, data) => {
        const { books } = JSON.parse(data)
        const elmentID = books.find(data => data.id == id)
        res.status(200).json(elmentID)
    })
})
app.listen(PORT, () => console.log("server online"))
