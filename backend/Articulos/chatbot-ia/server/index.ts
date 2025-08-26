import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import { MongoClient } from 'mongodb'
import { callAgent } from './agent'

import cors from 'cors'

const app : Express = express()
app.use(cors())
app.use(express.json())


const client = new MongoClient(process.env.MONGODB_ATLAS_URI as string)

async function starServer() {
    try {
        await client.connect()
        await client.db("admin").command({ ping : 1}) // envia un comando especial a MongoDB -

        console.log("Conceccion con MongoDB Exitosa")

        app.get('/', (req: Request, res: Response) => {
            res.send("LangGraph Agent Server")
        })


        // Inicio conversacion
        app.post('/chat', async (req: Request, res: Response) => {
            const initialMessage = req.body.message
            const threarId = Date.now().toString()

            console.log(initialMessage)

            try {
                // Comuinicacion con el agente IA.
                const response = await callAgent(client, initialMessage, threarId)
            } catch (error) {
                console.error("Error starting conversation", error)
                res.status(500).json({ error: "Internal server error"})
            }
        })


        // Solicita con un ID, que ya esta identificado threadId
        app.post('/chat/:threadId', async (req: Request, res: Response) => {
            const { threadId } = req.params
            const { message } = req.body

            try{
                const response = await callAgent(client, message, threadId)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error : "Internal server error"})
            }
        })


        const PORT = process.env.PORT || 8000
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`)
        })

    } catch (error) {
        console.error('Error to conecction to MongoDB:', error)
        process.exit()
    }
}

starServer()