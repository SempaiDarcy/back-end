import express, {Request, Response} from "express";
import cors from 'cors'

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Guys')
})
