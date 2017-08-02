const express = require('express')
const app = express()
const spotcrime = require('spotcrime');
const path = require('path');

app.get('/', function (req, res) {
//   res.send()
	res.sendFile(path.join(__dirname + '/index.html'));
})

// TODO: instead of hello world, needs to return index.js file(add javascript files)
// TODO: 

app.get('/spotcrime', function (req, res) {
	// res.send('spotcrime')

	// somewhere near phoenix, az 
	const loc = {
		// {city}
	lat: 41.886393,
	lon: -87.620037
	};
	
	const radius = 0.01; // this is miles 
	
	spotcrime.getCrimes(loc, radius, function(err, crimes){
		res.send(crimes)
	});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

