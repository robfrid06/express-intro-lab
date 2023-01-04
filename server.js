// import modules

import express from 'express'
import { pokedex } from './data/pokedex.js';

// Create Express app

const app = express();

// Configure the app (app.set)

app.set('view engine', 'ejs');

// Mount Middleware (app.use)

app.use('/public', express.static('public'));

// Mount routes

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/pokedex', (req, res) => {
  res.render('pokemon', {
    pokedex: pokedex
  });
});

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
});