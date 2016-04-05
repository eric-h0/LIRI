var fs      = require('fs');
var keys    = require('./keys.js');
var request = require ("request");
var Twitter = require('twitter');
var spotify = require('spotify');
var type    = process.argv[2];

if(type == "tweets"){
  console.log("Twitter")
};

if(type == "spotify"){
  console.log("Spotify")
};

if(type == "movie"){
  var movie = process.argv[3];
  request('http://www.omdbapi.com/?t='+movie+'&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
    if (!error && response.statusCode == 200){
         var json = JSON.parse(body);
         console.log("\nTitle: "+json.Title);
         console.log("Year: "+json.Year);
         console.log("IMDB Rating: "+json.imdbRating);
         console.log("Country: "+json.Country);
         console.log("Language: "+json.Language);
         console.log("Plot: "+json.Plot);
         console.log("Actors: "+json.Actors);
         console.log("Rotten Tomatoes rating: "+json.tomatoRating);
         console.log("Rotten Tomatoes URL: "+json.tomatoURL+"\n");
         };
    });
};

if(type == "do-what-it-says"){
  console.log("Do what it says.")
};
