import { Request,Response } from "express";
import {db} from "../db/db";

export const deleteVideosController = (req:Request, res:Response) => {
    const videos = db.videos
    console.log('работает')
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            videos.splice(i, 1)
            res.send(204)
        }
    }
    res.send(404)
}