function showMe(yourID){
	for(var i=0; i < yourID.length;i++) {
		if(yourID.charAt(i) == ' '){
			return false;
		}
	}
	return true;
}

// or

// function showMe(yourID){
// 	for(var i=0; i < yourID.length;i++) {
// 		if(yourID.indexOf(' ') == -1){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// which can be written like

// function showMe(yourID){
// 	return (yourID.indexOf(" ") == -1)
// }