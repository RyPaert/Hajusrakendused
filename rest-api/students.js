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
    result += "<h1>Students</h1>";
    result +="<a href='/students'>All Students</a>";
    result +="<ul>";
    for (const item in students) {
        result += `<li><a href='students/${item.id}'>${item.name}</a></li>`
    }
    result +="</ul>"
    result +="</body></html>"
})

app.get('/students/:id', (req, res) => {
    const student = getById(req.params["id"]);
    if (typeof student === "undefined") {
        return res.status("404").send({"error":"Student not found"});
    }
    res.send(student)
})

app.post("/students", (req, res) => {
    if(!req.body) {
        return res.status(400).send({error:"Missing required json with parameters: name, area"});
    }
    const missing = [];
    if (!req.body.name) {
        missing.push("name");
    }
    if (!req.body.area) {
        missing.push("area");
    }
    if (missing) {
        return res.status(400).send({error: {
            message:"Missing required parameters",
            params : missing
        }})
    }
    const newId = getNewId();
    const newStudent = {
        id:newId,
        name: req.body.name,
        area: req.body.area
    }
    students.push(newStudent)
    res.status(201).send(newStudent).location(`http://localhost:8080/students/${newId}`.send.newStudent());
})

app.delete("/students/:id", (req, res) => {
    const student = getById(req.params["id"]);
    if (typeof student === "undefined") {
        return res.status("404").send({"error":"Student not found"});
    }
    const studentIndex = students.findIndex((value)=>value.id==student.id)
    students.splice(studentIndex, 1);
    return res.status(204).send();
}) 
app.listen(8080, () => {
    console.log(`API is up at http://localhost:8080`);
})

function getById(studentId) {
    return students.find((value) => value.id == studentId);
}

function getNewId() {
    return Math.max(...students.map((value)=>value.id)) + 1;
}