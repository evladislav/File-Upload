const mongoose = require('mongoose');
const validator = require('validator')

const artWork = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: [true, 'Please input type'],
  },
  name: {
    type: String,
    trim: true,
    // unique: true,
    required: [true, 'Please input name'],
  },
  portfolioURL: {
    type: String,
    required: [ true, 'A portfolio url is required' ],
    validate: { 
        validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
        message: 'Must be a Valid URL' 
      }
  },
  about: {
    type: String,
    required: [true, 'Please input about the artist'],
  },
  royalties: {
    type: Number,
    min: [0, 'Royalties must bigger than 0'],
    max: [100, 'Royalties must smaller than 100'],
  },
  artworkFiles: { type: String, required: true},
});

module.exports = mongoose.model('Artwork', artWork);