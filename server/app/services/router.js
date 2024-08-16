const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const posterActions = require("../controllers/posterActions");
const userActions = require("../controllers/userActions");

const { checkCookie, checkAdmin } = require("./checkAuth");
const { validateLogin } = require("./validation/user");
// Import item-related actions
// const { browse, read, add } = require("../controllers/itemActions");

// Route to get a list of users
router.get("/users", checkCookie, checkAdmin, userActions.browse);

// Route to delete a list of users
router.delete("/users/:id", checkCookie, checkAdmin, userActions.destroy);

router.post("/login", validateLogin, userActions.login);

// Route to get a list of posters
router.get("/posters", posterActions.browse);

// Route to get a specific item by ID
// router.get("/:id", read);

// Route to add a new item
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
