const express = require("express");
const categoryRoutes = require("express").Router();
//let category = require("../category/category");
const dbo = require("../../db/conn"); // connect to the database
const ObjectId = require("mongodb").ObjectId; // convert the Id from String to ObjectId for the _id

categoryRoutes.route("/addcategory").post(function (req, response) {
	let db_connect = dbo.getDb("sansalu");

	let newcategory = {
		Category_Name: req.body.Category_Name,
		Category_Code: req.body.Category_Code,
		Description: req.body.Description,
	};

	db_connect.collection("category").insertOne(newcategory, function (err, res) {
		if (err) throw err;

		response.json(res);
	});
});

categoryRoutes.route("/getcategory").get(function (req, response) {
	let db_connect = dbo.getDb("sansalu");
	db_connect
		.collection("category")
		.find({})
		.toArray(function (err, res) {
			if (err) throw err;
			response.json(res);
		});
});

categoryRoutes.route("/getcategory/:id").get(function (req, response) {
	let db_connect = dbo.getDb("sansalu");
	let myobject = { _id: ObjectId(req.params.id) };
	db_connect.collection("category").findOne(myobject, function (err, res) {
		if (err) throw err;
		response.json(res);
	});
});

categoryRoutes.route("/updatecategory/:id").put(function (req, response) {
	let db_connect = dbo.getDb("sansalu");

	let myquery = { _id: ObjectId(req.params.id) };

	let newvalues = {
		$set: {
			Category_Name: req.body.Category_Name,
			Category_Code: req.body.Category_Code,
			Description: req.body.Description,
		},
	};

	db_connect.collection("category").updateOne(myquery, newvalues, function (err, res) {
		if (err) throw err;

		response.json(res);
	});
});

categoryRoutes.route("/deletecategory/:id").delete(function (req, response) {
	let db_connect = dbo.getDb("sansalu");

	let myquery = { _id: ObjectId(req.params.id) };

	db_connect.collection("category").deleteOne(myquery, function (err, obj) {
		if (err) throw err;

		response.json(obj);
	});
});

module.exports = categoryRoutes;
