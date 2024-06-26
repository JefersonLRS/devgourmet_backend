import { Router } from 'express'
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated'

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoriesController } from './controllers/category/ListCategoriesController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListCategoryController } from './controllers/product/ListProductsController';
import { FindProductController } from './controllers/product/FindProductController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { ListAllOrderController } from './controllers/order/ListAllOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { FindTableController } from './controllers/order/FindTableController';
import { ListOrderByTableController } from './controllers/order/ListOrderByTableController';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// ------------------- USER ROUTES -------------------
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// ------------------- CATEGORY ROUTES -------------------
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoriesController().handle)

// ------------------- PRODUCT ROUTES -------------------
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListCategoryController().handle)
router.get('/product/find', isAuthenticated, new FindProductController().handle)

// ------------------- ORDER / ITEM ROUTES -------------------
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/item', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/allOrders', isAuthenticated, new ListAllOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)
router.get('/order/find', isAuthenticated, new FindTableController().handle)
router.get('/order/findItems', isAuthenticated, new ListOrderByTableController().handle)

export { router }