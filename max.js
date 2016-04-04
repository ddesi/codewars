// find largest number ----- FOR LOOP

function largest_number(arr) {
	largestNumber = arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (largestNumber < arr[i] ) {
			largestNumber = arr[i];
		}
	}
	return largestNumber
}


// console.log(largest_number([1, 34, 0, 87, 2, 1992, -76, 111, 9]));