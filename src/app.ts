import express, {Request,Response} from "express";
import cors from 'cors'
import {productsRouter} from "./routers/products-router";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

app.get('/', (req:Request, res:Response) => {
    // res.status(200).json({version: '1.0'})
    res.send('Hello')
})


// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
app.use('/products', productsRouter)