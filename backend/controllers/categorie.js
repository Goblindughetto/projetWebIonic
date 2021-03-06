function createCategorie(req, res) {
    let Categorie = require('../models/Categorie');
    let newCategorie = Categorie ({
        name: req.body.name,
        boutique_id: req.body.boutique_id
    });
  
    newCategorie.save()
    .then((savedCategorie) => {
        res.json(savedCategorie);
    }, (err) => {
        res.status(400).json(err)
    });
}

function readCategorie(req, res) {
    let Categorie = require("../models/Categorie");

    Categorie.findById({_id : req.params.id})
    .then((categorie) => {
        res.status(200).json(categorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCategories(req, res) {
    let Categorie = require("../models/Categorie");

    Categorie.find({"boutique_id" : req.params.id})
    .then((categorie) => {
        res.status(200).json(categorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategorie(req, res) {

    let Categorie = require("../models/Categorie");

    Categorie.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name}, 
        {new : true})
    .then((updatedCategorie) => {
        res.status(200).json(updatedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategorie(req, res) {
    let Categorie = require("../models/Categorie");

    Categorie.findOneAndRemove({_id : req.params.id})
    .then((deletedCategorie) => {
        res.status(200).json(deletedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCategorie;
module.exports.reads = readCategories;
module.exports.read = readCategorie;
module.exports.delete = deleteCategorie;
module.exports.update = updateCategorie;
