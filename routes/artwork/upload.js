const express = require('express');
const path = require('path');
const multer = require('multer');
const { nanoid } = require('nanoid');
const router = express.Router();

const { createArtwork } = require('../../app/controllers/artworkupload');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // var appDir = path.dirname(require.main.filename);
    var uploadPath = path.join(appRoot, 'public/images/artwork');
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, nanoid() + '-' + file.originalname);
  },
});


const upload = multer({ storage: storage });

router.post(
  '/',
  upload.single('artWorkFiles'), // for storing single image : upload.single('productPicture')
  createArtwork
);

module.exports = router;