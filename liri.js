var keys = require('./keys.js');
var request = require ("request");
var type = process.argv[2];

if(type == "my-tweets"){
  console.log("Twitter")
}

if(type == "spotify-this-song"){
  console.log("Spotify")
}

if(type == "movie-this"){
  var movie = process.argv[3];
  request('http://www.omdbapi.com/?t='+movie+'&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       var json = JSON.parse(body);
       console.log("Title: "+json.Title);
       console.log("Year: "+json.Year);
       console.log("IMDB Rating: "+json.imdbRating);
       console.log("Country: "+json.Country);
       console.log("Language: "+json.Language);
       console.log("Plot: "+json.Plot);
       console.log("Actors: "+json.Actors);
       console.log("Rotten Tomatoes rating: "+json.tomatoRating);
       console.log("Rotten Tomatoes URL: "+json.tomatoURL);
       }
    })
};

if(type == "do-what-it-says"){
  console.log("Do what it says.")
}
