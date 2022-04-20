function createBoutique(req, res) {
    let Boutique = require('../models/Boutique');
    let newBoutique = Boutique ({
        name: req.body.name
    });
  
    newBoutique.save()
    .then((savedBoutique) => {
        res.json(savedBoutique);
    }, (err) => {
        res.status(400).json(err)
    });
}

function readBoutiques(req, res) {
    let Boutique = require("../models/Boutique");

    Boutique.find({})
    .then((boutiques) => {
        res.status(200).json(boutiques);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readBoutique(req, res) {
    let Boutique = require("../models/Boutique");

    Boutique.findById({_id : req.params.id})
    .then((boutique) => {
        res.status(200).json(boutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateBoutique(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name}, 
        {new : true})
    .then((updatedBoutique) => {
        res.status(200).json(updatedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteBoutique(req, res) {
    let Boutique = require("../models/Boutique");

    Boutique.findOneAndRemove({_id : req.params.id})
    .then((deletedBoutique) => {
        res.status(200).json(deletedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createBoutique;
module.exports.reads = readBoutiques;
module.exports.read = readBoutique;
module.exports.delete = deleteBoutique;
module.exports.update = updateBoutique;
