const express = require('express');
const cors = require('cors');
const app = express(cors);

app.use(cors());
app.use(express.json());

const students = [
    { id: 1, name: "Sandra", area: "IT" },
    { id: 2, name: "Mihkel", area: "Tont" }
]

app.get('/students', (req, res) => {
    res.send(students)
})

app.get("/", (req, res) => {
    let result = "<doctype html5><html><head><title>Student List</title></head><body>";
    result += <h1>Students</h1>
    
})

app.post()

app.listen(8080, () => {
    console.log(`API is up at http://localhost:8080`)
})