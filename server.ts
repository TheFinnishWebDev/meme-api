import { config } from "dotenv"
config()

import express from "express"
const app = express()

import memesRoute from "./routes/memes.js"

import cors from "cors"

const port: string = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/v1/memes", memesRoute)

app.listen(port, () => {
    console.log("Hei")
})