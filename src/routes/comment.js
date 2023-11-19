const express = require("express");
const commentSchema = require("../models/comment");
const multer = require("multer");
const multerConfig = require("../helpers/multerConfig");
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
router.post("/comments", this.fileUpload, (req, res) => {
    const body = req.body;
    console.log(body);
    if(req.file && req.file.filename){
        body.photo = req.file.filename;
    }
    const comment = new commentSchema(body);
    comment
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// get a user By Email
router.get("/commentsByPostId/:postId", (req,res) => {
    let {postId} = req.params;
  
    commentSchema
    .find({postId:postId})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;