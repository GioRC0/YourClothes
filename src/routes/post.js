const express = require("express");
const postSchema = require("../models/post");

const router = express.Router();

// create a post
router.post("/posts", (req,res) => {
    const post = postSchema(req.body);
    post.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a post by id
router.get("/posts/:id", (req,res) => {
    const {id} = req.params;
    postSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

// update a post
router.put("/posts/:id", (req,res) => {
    const {id} = req.params;
    const {description,audiovisuals} = req.body

    postSchema
    .updateOne({_id: id}, {$set: {descriptione, audiovisuals}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

// delete a post by id
router.delete("/posts/:id", (req,res) => {
    const {id} = req.params;
    postSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;