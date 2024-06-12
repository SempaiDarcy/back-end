import {VideoDbType} from "../src/db/video-db-type";
import {DBType} from "../src/db/db";

export const video1: VideoDbType = {
    id: 1,
    title: "Introduction to Node.js",
    author: "Jane Doe",
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: "2023-01-15T08:00:00Z",
    publicationDate: "2023-01-16T08:00:00Z",
    availableResolution: ["P144", "P240", "P360", "P720", "P1080"]
}

export const dataset1: DBType = {
    videos: [video1]
}