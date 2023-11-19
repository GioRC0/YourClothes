const express = require("express");
const multer = require("multer");
const multerConfig = require("../helpers/multerConfig");
const userSchema = require("../models/user");

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

// create a user
router.post("/users", this.fileUpload, (req,res) => {
    const body = req.body;
    if(req.file && req.file.filename){
        body.photo = req.file.filename;
    }
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user by id
router.get("/users/:id", (req,res) => {
    const {id} = req.params;
    console.log(id);
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

// get a user By Email
router.get("/usersByEmail/:email", (req,res) => {
    console.log(req.params)
    let {email} = req.params;
  
    console.log(email);
    userSchema
    .findOne({email:email})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


//update a user by id
router.put("/users/:id", (req,res) => {
    const {id} = req.params;
    const {name,age,email,password} = req.body

    userSchema
    .updateOne({_id: id}, {$set: {name, age, email, password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//delete a user by id
router.delete("/users/:id", (req,res) => {
    const {id} = req.params;

    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;