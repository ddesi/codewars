function exampleSort(arr,exampleArr){
	arr.sort((x,y)=> exampleArr.indexOf(x) - exampleArr.indexOf(y));
	return arr;
}