const express = require("express");


const materialRoutes = express.Router();


const dbo = require("../../db/conn"); // connect to the database


const ObjectId = require("mongodb").ObjectId // convert the Id from String to ObjectId for the _id

materialRoutes.route("/add").post(function (req, response) {
    let db_connect = dbo.getDb("sansalu");
    let myobj = {

        name : req.body.name,
        cost : Number(req.body.cost),

    };
    db_connect.collection("material").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

//update
materialRoutes.route("/update/:id").post(function (req, response) {

    let db_connect = dbo.getDb("sansalu");
    
    let myquery = { _id: ObjectId(req.params.id) };
    
    let newvalues = {
    
        $set: {
    
            name : req.body.name,
            cost : Number(req.body.cost),
    
        },
    
    };
    
    db_connect.collection("material").updateOne(myquery, newvalues, function (err, res) {
    
            if (err) throw err;
    
            response.json(res);
    
        });
    
    });

    //delete
    materialRoutes.route("/delete/:id").delete(function(req, response){

        let db_connect = dbo.getDb("sansalu");
        
        let myquery = { _id: ObjectId(req.params.id) };
        
        db_connect.collection("material").deleteOne(myquery, function (err, obj) {
        
            if (err) throw err;
        
            response.json(obj);
        
        });
        
    });

    module.exports = materialRoutes;