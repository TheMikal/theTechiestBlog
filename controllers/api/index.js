const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes.js");

router.use("/users", userRoutes);
router.use("/blogPost", blogPostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;