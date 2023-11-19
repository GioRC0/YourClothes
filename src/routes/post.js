const express = require("express");
const multer = require("multer");
const multerConfig = require("../helpers/multerConfig");
const postSchema = require("../models/post");

const router = express.Router();

const upload = multer(multerConfig).single("photo");

exports.fileUpload = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ message: error });
        }
        return next();
    });
};

// create a post
router.post("/posts", this.fileUpload, (req, res) => {
    const body = req.body;
    if(req.file && req.file.filename){
        body.photo = req.file.filename;
    }
    console.log(body)
    const post = new postSchema(body);
    post
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// get posts
router.get("/posts", (req, res) => {
    postSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
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
    const body = req.body
    console.log(req.body);
    postSchema
    .updateOne({_id: id},{$set: body})
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