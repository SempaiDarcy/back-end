import {VideoDbType} from "./video-db-type";
import {Resolutions} from "../input-output-types/video-types";

export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    videos: VideoDbType[]
}

export const db: DBType = { // создаём базу данных (пока это просто переменная)
    videos: [
        {
            id: 1,
            title: "Introduction to Node.js",
            author: "Jane Doe",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: "2023-01-15T08:00:00Z",
            publicationDate: "2023-01-16T08:00:00Z",
            availableResolution: [Resolutions.P144],
        },
        {
            id: 2,
            title: "Introduction to Express.js",
            author: "Jane Hoe",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: "2023-01-15T08:00:00Z",
            publicationDate: "2023-01-16T08:00:00Z",
            availableResolution: [Resolutions.P240],
        }
    ],
}

// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        db.videos = []
        return
    }

    // если что-то передано - то заменяем старые значения новыми
    db.videos = dataset.videos || db.videos
}