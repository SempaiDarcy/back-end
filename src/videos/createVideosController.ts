import {Response, Request} from 'express'
import {OutputErrorsType} from '../input-output-types/output-errors-type'
import {db} from '../db/db'
import {InputVideoType, Resolutions} from '../input-output-types/video-types'
import {VideoDbType} from "../db/video-db-type";

const inputValidation = (video: InputVideoType) => {
    const errors: OutputErrorsType = { // объект для сбора ошибок
        errorsMessages: []
    }
    if(typeof video.title !== 'string') {
        errors.errorsMessages.push({
            message: `error!!!`,
            field:'title'
        })
    }
    if(typeof video.author !== 'string') {
        errors.errorsMessages.push({
            message: `error!!!`,
            field:'author'
        })
    }
    if (!Array.isArray(video.availableResolution)
        || video.availableResolution.find(p => !Resolutions[p])
    ) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        })
    }
    return errors
}

export const createVideosController = (req: Request<any, any, InputVideoType>, res: Response<any /*OutputVideoType*/ | OutputErrorsType>) => {
    const errors = inputValidation(req.body)
    if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
        res
            .status(400)
            .json(errors)
        return
    }

    // если всё ок - добавляем видео
    const newVideo: VideoDbType = {
        ...req.body,
        canBeDownloaded:false,
        minAgeRestriction: null,
        createdAt: new Date().toString(),
        publicationDate: new Date().toString(),
        id: Date.now() + Math.random(),
    }
    db.videos = [...db.videos, newVideo]

    res
        .status(201)
        .json(newVideo)
}