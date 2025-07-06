/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
  * GET /
  * Retrieves all comments from the database.
  * 
  * @name GET/api/comments
  * @function
  * @memberof module:routes/api/comments
  * @async
  * @param {express.Request} req - Express request object
  * @param {express.Response} res - Express response object
  * @returns {Object[]} 200 - An array of comment objects
  * @returns {Object} 500 - Internal Server Error
  */

 /**
  * DELETE /:id
  * Deletes a comment by its ID.
  * 
  * @name DELETE/api/comments/:id
  * @function
  * @memberof module:routes/api/comments
  * @async
  * @param {express.Request} req - Express request object
  * @param {express.Response} res - Express response object
  * @returns {Object} 200 - Success message
  * @returns {Object} 404 - Comment not found
  * @returns {Object} 500 - Internal Server Error
  */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// GET all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a comment by ID
router.delete("/:id", async (req, res) => {
  const commentId = req.params.id;

  try {
    const result = await Comment.findByIdAndDelete(commentId);
    if (!result) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
