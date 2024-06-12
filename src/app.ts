import express, {Request, Response} from "express";
import cors from 'cors'

import {videosRouter} from "./videos";
import {SETTINGS} from "./settings";

export const app = express()
app.use(express.json())
app.use(cors())

app.use(SETTINGS.PATH.VIDEOS, videosRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Guys')
})
