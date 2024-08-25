const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const posterActions = require("../controllers/posterActions");
const userActions = require("../controllers/userActions");

const { checkCookie, checkAdmin } = require("./checkAuth");
const { validateLogin } = require("./validation/user");

// Route to update informations users
router.put("/users/:id", userActions.update);

// Route to get a list of users
router.get("/users", checkCookie, checkAdmin, userActions.browse);

// Route to delete a list of users
router.delete("/users/:id", checkCookie, checkAdmin, userActions.destroy);

router.post("/login", validateLogin, userActions.login);

// Route to get a list of posters
router.get("/posters", posterActions.browse);

router.post("/register", userActions.create);

/* ************************************************************************* */

module.exports = router;
