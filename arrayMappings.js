Array.prototype.map = function(f) {
	var result = [];
  
	for (var i=0; i<this.length; i++){
		result.push(f(this[i]));
	}
	return result;
}