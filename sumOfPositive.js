function positiveSum(arr) {

	var sum = 0;

	for(var i=0; i < arr.length; i++) {
		if(arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}

//alt version

// function positiveSum(arr) {
	
// 	var posNumbers = arr.filter(n=>(n>0));
// 	var results = posNumbers.reduce((n1, n2)=>(n1+n2), 0);

// 	return results;
// }