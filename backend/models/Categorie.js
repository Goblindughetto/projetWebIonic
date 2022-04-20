var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name : String,
  boutique_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Boutique'},
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Categorie', CategorieSchema);
