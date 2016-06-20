function differenceInAges(ages){
  var max = Math.max.apply(Math, ages),
  min = Math.min.apply(Math, ages);
  
  return [min, max, max-min];
}