function leagueCalculate(team1, team2, result) {
	if(result == 'draw'){
		leagueTable.forEach(e => {
			if(team1 == e[0] || team2 == e[0]) {
				e[1]++;
			}
		})
	}
	
	if(result == 'win') {
		leagueTable.forEach(e => {
			if(team1 == e[0]){
				e[1]+=3;
			}
		})
	}

	leagueTable.sort((a, b) => (a[1] === b[1] ? a[0] > b[0] : a[1] < b[1]));

	return leagueTable
}


//alt

// function leagueCalculate(team1, team2, result) {
  
//   leagueTable.map(function(e) {
//       if (e[0] == team1 || e[0] == team2) {
//           e[1] += result == 'draw' ? 1 : (e[0] == team1 ? 3 : 0);
//       }
//   });

//   leagueTable.sort(function(a, b) {
//       if (a[1] > b[1]) return -1;
//       if (a[1] < b[1]) return 1;
//       if (a[0] < b[0]) return -1;
//       if (a[0] > b[0]) return 1;
//       return 0;
//   });

//   return leagueTable;
// }