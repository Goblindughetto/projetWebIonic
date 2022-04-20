var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  price : Number,
  categorie_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'},
  createdAt : {
    type : Date,
    default : Date.now
  },
});


module.exports = mongoose.model('Produit', ProduitSchema);
