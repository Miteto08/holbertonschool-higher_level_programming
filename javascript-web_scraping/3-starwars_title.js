#!/usr/bin/node

const req = require('request');
const starWarsUri = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

req(starWarsUri, function (error, res, body) {
  console.log(error || JSON.parse(body).title);
});
