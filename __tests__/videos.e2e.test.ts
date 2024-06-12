import {req} from './test-helpers'
// import {setDB} from '../src/db/db'
import {SETTINGS} from '../src/settings'
import {dataset1} from "./datasets";
import {setDB} from "../src/db/db";
import {InputVideoType, Resolutions} from "../src/input-output-types/video-types";

describe('/videos', () => {
    // beforeAll(async () => { // очистка базы данных перед началом тестирования
    //     setDB()
    // })

    it('should get empty array', async () => {
        // setDB() // очистка базы данных если нужно

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200) // проверяем наличие эндпоинта

        console.log(res.body) // можно посмотреть ответ эндпоинта

        expect(res.body.length).toBe(2)
        // проверяем ответ эндпоинта
    })
    it('should get not empty array', async () => {
        setDB(dataset1) // заполнение базы данных начальными данными если нужно

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)

        console.log(res.body)

        expect(res.body.length).toBe(1)
        expect(res.body[0]).toEqual(dataset1.videos[0])
    })
    it('should create', async () => {
        setDB()
        const newVideo: InputVideoType  = {
            title: 't1',
            author: 'a1',
            availableResolution: [Resolutions.P144]
        }

        const res = await req
            .post(SETTINGS.PATH.VIDEOS)
            .send(newVideo) // отправка данных
            .expect(201)

        console.log(res.body)

        expect(res.body.availableResolution).toEqual(newVideo.availableResolution)
    })
})