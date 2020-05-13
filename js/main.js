/*----- POLITICIAN OBJECT -----*/
// Function creates a politician, assigning a name and default values
var  makePolitician = function(name, partyColor){	
	var politician = {};
	politician.name = name; // string containing politician name
	politician.electionResults = null; // array containing votes 
	politician.totalVotes = 0; // sum of votes
	politician.partyColor = partyColor; // represented as RGB values in brackets

	// Method of politician used to tally votes
	politician.tallyVotes = function(){
		this.totalVotes = 0;
		for(var i = 0; i < this.electionResults.length; i++){
			this.totalVotes += this.electionResults[i];
		}
		return this.totalVotes;
	};
	return politician;
};

var winner = " ";

var candidate1 = makePolitician("Susie Woo", [132,17,11]);
var candidate2 = makePolitician("Reshmika Lata", [245,141,136]);

console.log(candidate1.partyColor + " " + candidate2.partyColor);
candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3,
								 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 
								14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// Adjust for Florida recount
candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

// Adjust for California recount
candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

// Adjust for Texas recount
candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

var setStateResults = function(state){
	theStates[state].winner = null;

	if(candidate1.electionResults[state] > candidate2.electionResults[state]){
		theStates[state].winner = candidate1;
	} 
	else if (candidate1.electionResults[state] < candidate2.electionResults[state]){
		theStates[state].winner = candidate2;
	}
	var stateWinner = theStates[state].winner;
	if(stateWinner !== null){
		theStates[state].rgbColor = stateWinner.partyColor;
	}
	else{
		theStates[state].rgbColor = [11,32,57];
	}
}

candidate1.tallyVotes();
candidate2.tallyVotes();



console.log(candidate1.name + ": " + candidate1.electionResults);
console.log(candidate2.name + ": " + candidate2.electionResults);
console.log(candidate1.name + ": " + candidate1.totalVotes);
console.log(candidate2.name + ": " + candidate2.totalVotes);

if (candidate1.totalVotes > candidate2.totalVotes){
	winner = candidate1.name;
}
else if (candidate1.totalVotes < candidate2.totalVotes){
	winner = candidate2.name;
}
else {
	winner = "It's a tie!";
}

console.log("The winner is " + winner + ".");

var countryResultsJS = document.getElementById("countryResults");
countryResults.children[0].children[0].children[0].innerText = candidate1.name; 
countryResults.children[0].children[0].children[1].innerText = candidate1.totalVotes;
countryResults.children[0].children[0].children[2].innerText = candidate2.name;
countryResults.children[0].children[0].children[3].innerText = candidate2.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;
