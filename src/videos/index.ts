import {Router} from "express";
import {getVideosController} from "./getVideosController";
import {createVideosController} from "./createVideosController";
import {findVideosController} from "./findVideosController";
import {deleteVideosController} from "./deleteVideosController";
import {changeVideosController} from "./changeVideosController";

export const videosRouter = Router({})

videosRouter.get('/', getVideosController)
videosRouter.get('/:id', findVideosController)
videosRouter.post('/', createVideosController)
videosRouter.delete('/:id', deleteVideosController)
videosRouter.put('/:id', changeVideosController)