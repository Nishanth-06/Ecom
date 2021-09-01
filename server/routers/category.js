const express = require("express");
const router = express.Router();

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category");
const {isSignedin, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const category = require("../models/category");

//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

//actual routes are here
//Create
router.post("/category/create/:userId",isSignedin, isAuthenticated, isAdmin, createCategory);

//Read
router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategory);

//Update
router.put("/category/:categoryId/:userId",isSignedin, isAuthenticated, isAdmin, updateCategory);

//Delete
router.delete("/category/:categoryId/:userId",isSignedin, isAuthenticated, isAdmin, removeCategory);

module.exports = router;