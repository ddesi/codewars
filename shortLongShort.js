// Description:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).


function solution(a, b){
	if (a.length > b.length && !a && !b) {
		return a + b + a;
	} else {
		return b + a + b;
	}
}


// best practices:
// function solution(a, b) {
//   return a.length < b.length ? a + b + a : b + a + b
// }