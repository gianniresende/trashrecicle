import express from 'express'
import PointsController from './controllers/pointsController'
import Itemscontroller from './controllers/itemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemscontroller = new Itemscontroller()

routes.get('/items', itemscontroller.index)

routes.post('/points', pointsController.create)
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)

export default routes