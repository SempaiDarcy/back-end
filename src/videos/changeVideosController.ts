import { Request, Response } from "express";
import { db } from "../db/db";

export const changeVideosController = (req: Request, res: Response) => {
    let videos = db.videos;
    let video = videos.find(el => el.id === +req.params.id);

    if (video) {
        const { title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;

        // Validate input
        if (!title || typeof title !== 'string' ||
            !author || typeof author !== 'string' ||
            !Array.isArray(availableResolutions) ||
            typeof canBeDownloaded !== 'boolean' ||
            (minAgeRestriction && typeof minAgeRestriction !== 'number') ||
            (publicationDate && typeof publicationDate !== 'string')) {
            return res.status(400).json({
                errorsMessages: [
                    { message: "Invalid input data", field: "body" }
                ]
            });
        }

        // Update video properties
        video.title = title;
        video.author = author;
        video.availableResolution = availableResolutions;
        video.canBeDownloaded = canBeDownloaded;
        video.minAgeRestriction = minAgeRestriction;
        video.publicationDate = publicationDate;

        return res.status(204).send();
    } else {
        return res.status(404).json({
            errorsMessages: [
                { message: "Video not found", field: "id" }
            ]
        });
    }
};
