function arrayMadness(a, b) {
	var squareA = a.reduce((x,y)=>x+y*y,0),
	squareB = b.reduce((x,y)=>x+y*y,0);

	return(squareA > squareB) ? true : false;
  
}


// function arrayMadness(a, b) {
// 	return a.reduce((x, y) => x += y * y, 0) > b.reduce((x, y) => x += y * y * y, 0)
// }