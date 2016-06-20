function hotSingles(arr1, arr2) {

	var arr3 = [];

	for(i=0; i<arr1.length; i++){

		if(arr2.indexOf(arr1[i]) == -1 && arr3.indexOf(arr1[i]) == -1){
			arr3.push(arr1[i]);
		}
	}

	for (i=0; i<arr2.length; i++){
		if(arr1.indexOf(arr2[i]) == -1 && arr3.indexOf(arr2[i]) == -1){
			arr3.push(arr2[i]);
		}
	}

	return arr3;
}