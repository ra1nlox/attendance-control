import express, { json, urlencoded } from "express";
import logger from "./utils/logger.js";
import * as path from "path"

const server = express()

const PORT = 80

// server.set('view engine', 'html');

const student_list = {
  
}

let present = []

server.use(json())
server.use(urlencoded({ extended: true }))
server.use(express.static(path.resolve('./public')))

server.get("/", async (req, res) => {
  res.render("index.html")
})

server.post("/clock_in", async (req, res) => { 
  if (!req.body.user_id) {
    return res.status(401).json({ msg: "Nu ați introdus codul personal" })
  }

  if (present.includes(student_list[req.body.user_id])) {
    return res.status(403).json({ msg: "Nu abuzează sistemul, ești deja înscris."})
  }

  for (let [key, value] of Object.entries(student_list)) {
    if (req.body.user_id == key) {
      logger.attendance(`${value} este prezent`)
      present.push(value)
      return res.status(200).json({ msg: "Ați fost înscris ca prezent"})
    }
  }

  return res.status(200).json({ msg: "Ați introdus cod personal greșit"})
})

server.get("/get_absences", async (req, res) => {
  const total_students = Object.values(student_list)

  const absences = total_students.filter(person => !present.includes(person))

  return res.status(200).json({absences})
})

async function start() {
  try {
    server.listen(PORT, () => {
      logger.info("Server listening on port " + PORT)
    })
  } catch (err) {
    logger.error("Could not connect express")
    throw err
  }
}

start()
