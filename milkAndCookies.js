// Description:
// Happy Holidays fellow Code Warriors!
// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait..when exactly did we need to do that?
// Time for Milk and Cookies
// Write a function timeForMilkAndCookies (time_for_milk_and_cookies in Ruby) that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise. Keep in mind Javascript's Date month is 0 based, while Ruby's Date month isn't.

function timeForMilkAndCookies(date){
	var month = date.getMonth();
  	var day = date.getDate();

  	if(month === 11 && day === 24)  return true;
  	else return false;
}



// best practices:
// function timeForMilkAndCookies(date){
//   return date.getDate() == 24 && date.getMonth() == 11;
// }