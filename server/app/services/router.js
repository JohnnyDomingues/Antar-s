const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const posterActions = require("../controllers/posterActions");
// Import item-related actions
// const { browse, read, add } = require("../controllers/itemActions");

// Route to get a list of posters
router.get("/posters", posterActions.browse);

// Route to get a specific item by ID
// router.get("/:id", read);

// Route to add a new item
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
