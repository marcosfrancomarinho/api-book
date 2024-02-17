const express = require("express")
const cors = require("cors")
const path = require("path")
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.get("/", (req, res) => {
    res.type('json')
    res.status(200)
    res.sendFile(path.join(__dirname, "db.json"))
})
app.listen(PORT, () => console.log("server online"))
