import {Request,Response} from "express";
import {db} from "../db/db";

export const findVideosController = (req:Request, res:Response) => {
    const video = db.videos.find(el=>el.id===+req.params.id);
    // console.log(db.videos)
    if(video){
        res.status(200).send(video);
    }
    else {
        res.status(404).send('\t\n' +
            'If video for passed id doesn\'t exist');
    }
}