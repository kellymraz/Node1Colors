// module.exports = {
	

// }

// Part 1 number 1

// var getLumin = function(r, g, b) {

// 	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

// 	return luminosity
// }

// console.log(getLumin(process.argv[2], process.argv[3], process.argv[4]))

/////////////////////////////////////////////////////////////////////
// process in node is like the window in the browser
// process is a big object and argv is an array of arguments

// Part 1 number 2

var getLumin = function(r, g, b) {

	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

	}

	
	if (luminosity >= 155) {
		return "light"
	}

	else  {
		return "dark"
	
	}

}

console.log(getLumin(process.argv[2], process.argv[3], process.argv[4]))