const path = require('path');
const Artwork = require('../models/artwork');
var jsonfile = require('jsonfile'); 
const fs = require('fs');   

exports.createArtwork = (req, res) => {
    const type = req.body.type;
    const name = req.body.name;
    const portfolioURL = req.body.portfolioURL;
    const about = req.body.about;
    const royalties = req.body.royalties;
    const artworkFiles = req.file.path.replace(/\\/g, "/")


    const artwork = new Artwork({
        type,
        name,
        portfolioURL,
        about,
        royalties,
        artworkFiles,
    });

    
    var file = path.join(appRoot, 'public/json/artwork.json');

    artwork.save((error, artwork) => {
        if (error) return res.status(400).json({ error });
        if (artwork) {
          console.log(artworkFiles);
          res.status(201).json({ artwork });
        }
      });
};