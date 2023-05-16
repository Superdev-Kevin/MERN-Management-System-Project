const express = require("express");


const cardDetailsRoutes = express.Router();


// connect to the database
const dbo = require("../../db/conn");


// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you create a new record.
cardDetailsRoutes.route("/add").post(function (req, response) {
    let db_connect = dbo.getDb("sansalu");
    let myobj = {
        CardNumber: Number(req.body.CardNumber),
        cvc: Number(req.body.cvc),
        ExpirationYear: Number(req.body.ExpirationYear),
        ExpirationMonth: Number(req.body.ExpirationMonth),
        
    };
    db_connect.collection("cardDetails").insertOne(myobj, function (err, res) {
    if (err) throw err;

    console.log("1 record inserted");
    response.json(res);
    });
});

//retrieve
cardDetailsRoutes.route("/").get(function (req, response) {
    let db_connect = dbo.getDb("sansalu");
    db_connect.collection("cardDetails").find({}).toArray(function(err, res) {
        if (err) throw err;
        response.json(res);
    });
});

cardDetailsRoutes.route("/:id").get(function (req, response) {
    let db_connect = dbo.getDb("sansalu");
    let myobject = {_id:ObjectId(req.params.id)};
    db_connect.collection("cardDetails").findOne(myobject, function(err, res) {
        if (err) throw err;
        response.json(res);
    });
});

//update
cardDetailsRoutes.route("/update/:id").post(function (req, response) {

    let db_connect = dbo.getDb("sansalu");
    
    let myquery = { _id: ObjectId(req.params.id) };
    
    let newvalues = {
    
        $set: {
    
            CardNumber: req.body.CardNumber,
            CVC: req.body.CVC,
            ExpirationYear: req.body.ExpirationYear,
            ExpirationMonth: req.body.ExpirationMonth,
    
        },
    
    };
    
    db_connect.collection("cardDetails").updateOne(myquery, newvalues, function (err, res) {
    
        if (err) throw err;
    
        response.json(res);
    
    });
    
});

//delete
cardDetailsRoutes.route("/delete/:id").delete(function(req, response){

    let db_connect = dbo.getDb("sansalu");
    
    let myquery = { _id: ObjectId(req.params.id) };
    
    db_connect.collection("cardDetails").deleteOne(myquery, function (err, obj) {
    
        if (err) throw err;
    
        response.json(obj);
    
    });
    
});

module.exports = cardDetailsRoutes;