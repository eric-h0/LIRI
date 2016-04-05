var fs      = require('fs');
var keys    = require('./keys.js');
var request = require ("request");
var Twitter = require('twitter');
var spotify = require('spotify');
var colors  = require('colors');
var type    = process.argv[2];
var client = new Twitter({
  consumer_key: 'GsXabDjw7KZwCvI3O38TVen1d',
  consumer_secret: 'biWBL3MuKq1kFVxtNBv3Y0LhVM23xwnBsDF3Kmabhkz6tZTnwG',
  access_token_key: '166452344-FLd0gUjnJ7p5wTVSiRJAYInaXva5y0VmDoNDmVkX',
  access_token_secret: '8UW9NLgrzQMAPtj5119bp7qvVlOu4k3vGzL5vfPGW7BSJ'
});

if(type == "tweets"){
  // console.log("Twitter")
  var params = {screen_name: 'E_Hizzle'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
};

if(type == "spotify"){
  console.log("Spotify")
};

if(type == "movie"){
  var movie = process.argv[3];
  request('http://www.omdbapi.com/?t='+movie+'&y=&plot=short&tomatoes=true&r==json', function (error, response, body) {
    if (!error && response.statusCode == 200){
         var json = JSON.parse(body);
         console.log("\nTitle".bold.underline+": "+json.Title.rainbow.underline);
         console.log("Year".bold.underline+": "+json.Year.green);
         console.log("IMDB Rating".bold.underline+": "+json.imdbRating.green);
         console.log("Country".bold.underline+": "+json.Country.green);
         console.log("Language".bold.underline+": "+json.Language.green);
         console.log("Plot".bold.underline+": "+json.Plot.green);
         console.log("Actors".bold.underline+": "+json.Actors.green);
         console.log("Rotten Tomatoes rating".bold.underline+": "+json.tomatoRating.green);
         console.log("Rotten Tomatoes URL".bold.underline+": "+json.tomatoURL.green+"\n");
         };
    });
};

if(type == "do-what-it-says"){
  console.log("Do what it says.")
};
