var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: "xxx",
    secret: "xxx"
});

var inquirer = require("inquirer");
inquirer.prompt([
        {
        type: "input",
        message: "Type a band and I'll tell you the genre!",
        name: "band"
        }
    ])
    .then(function(inquirerResponse) {
        
            console.log("You like " + inquirerResponse.band);
            
            
            spotify.search({ type: 'artist', query: inquirerResponse.band, limit: 1 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
            
                var genre = data.artists.items[0].genres;
                
                
              for (i = 0; i < genre.length; i ++) {
                
              console.log(JSON.stringify(genre[i]).replace(/['"]+/g, '')); 
              }
              });
        

    })


