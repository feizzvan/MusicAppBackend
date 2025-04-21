const Songs = require('../models/Song');
const { mongooseToObject } = require('../../util/mongoose');

class SongController {
    // [GET] /songs/:slug
    show(req, res, next){
        Songs.findOne({slug: req.params.slug}).then((song) =>
          res.render('songs.show', {
            song: mongooseToObject(song),
          }),
        ),cache(next);
    }

    // [GET] /songs/addSong
    addNewSong(req, res, next){
      res.render('songs/addsong');
  }

    // [POST] /songs/addNewSong
    addNewSong(req, res, next){
        res.render('songs/addNewSong');
    }
}

module.exports = new SongController();
