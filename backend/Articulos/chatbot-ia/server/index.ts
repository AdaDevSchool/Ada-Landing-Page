import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import { MongoClient } from 'mongodb'
import { callAgent } from './agent'
import cors from 'cors'

const app : Express = express()


app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGODB_ATLAS_URI

if (!mongoUri) {
    throw new Error('MONGO ATLAS URI no esta definida')
}

const client = new MongoClient(mongoUri)

async function starServer() {
    try {
        await client.connect()
        await client.db("admin").command({ ping : 1})
        console.log("Conceccion con MongoDB Exitosa")

        app.get('/', (req: Request, res: Response) => {
            res.send("LangGraph Agent Server")
        })


        app.post('/chat', async (req: Request, res: Response) => {
            const initialMessage = req.body.initialMessageconst
            const threarId = Date.now().toString()
            console.log(initialMessage)

            try {
                const response = await callAgent(client, initialMessage, threarId)
            } catch (error) {
                console.error("Error starting conversation", error)
            }

        })

    } catch (error) {
        console.error(error)
    }
}