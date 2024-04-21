const express = require('express');
const app = express();
const songsData = require('./songs.json');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/song/:song_id', (req, res) => {
    const songId = req.params.song_id;
    const song = songsData.songs.find(song => song.song_id === songId);
    if (!song) {
    } else {
      res.render('song', { song });
    }
  });
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
