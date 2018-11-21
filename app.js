var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: "4c923cdc8bc6484e863caf9ba5ac1ecf",
    secret: "91d4ae7b4be7428ebb42a5382a77ed6f"
});

var inquirer = require("inquirer");
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
inquirer.prompt([
        {
        type: "input",
        message: "Type a band and I'll tell you the genre!",
        name: "band"
        }
    ])
    .then(function(inquirerResponse) {
        
            console.log("You like " + inquirerResponse.band);
            
            
            spotify.search({ type: 'artist', query: band, limit: 1 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
            
                var genre = data.artists.items[0].genres;
                
                
              for (i = 0; i < genre.length; i ++) {
                
              console.log(JSON.stringify(genre[i]).replace(/['"]+/g, '')); 
              }
              });
        

    })
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data.name); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

