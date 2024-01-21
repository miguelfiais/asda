import { Router } from 'express'
import TaskController from './controllers/TaskController'

export const routes = Router()

routes.post('/', TaskController.create)
routes.get('/', TaskController.index)
