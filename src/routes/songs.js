const express = require('express')
const router = express.Router();

const songsController = require('../app/controllers/SongController');

router.get('/addsong', songsController.addsong);
router.post('/addNewSong', songsController.addNewSong);
router.get('/:slug', songsController.show);

module.exports = router;