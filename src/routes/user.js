const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create a user
router.post("/users", (req,res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user by id
router.get("/users/:id", (req,res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
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