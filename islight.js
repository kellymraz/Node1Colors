// islight.js

var islight = function(r, g, b) {

	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

	

	
	if (luminosity >= 155) {
		return "light"
	}

	else  {
		return "dark"
	
	}

}

console.log(islight(process.argv[2], process.argv[3], process.argv[4]))