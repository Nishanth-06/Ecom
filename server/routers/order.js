const express = require("express");
const router = express.Router();

const {isSignedin, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("userId", getOrderById);

//Actual routes
router.post("/order/create/:userId",isSignedin, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder)

//read
router.get("/order/all/:userId", getAllOrders)

//status of order
router.get("/order/status/:userId", isSignedin, isAuthenticated, isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedin, isAuthenticated, isAdmin, updateStatus)

module.exports = router;