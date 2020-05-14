/*----- POLITICIAN OBJECT -----*/
// Function creates a politician, assigning a name and default values
var  makePolitician = function(name, partyColor){	
	var politician = {};
	politician.name = name; // string containing politician name
	politician.electionResults = null; // array containing votes 
	//politician.popularVote = null; // array containing popular vote count per state
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

var candidate1 = makePolitician("Donald Trump", [143,61,69]);
var candidate2 = makePolitician("Hilary Clinton", [45,125,133]); //[11,32,57] (previous navy color)

candidate1.electionResults = [9,3,11,6,0,0,0,0,0,29,16,0,4,0,11,6,6,8,8,1,0,0,16,0,6,10,3,5,0,0,0,0,0,15,3,18,7,0,20,0,9,3,11,36,6,0,0,0,5,10,3];
candidate2.electionResults = [0,0,0,0,55,9,7,3,3,0,0,3,0,20,0,0,0,0,0,3,10,11,0,10,0,0,0,0,6,4,14,5,29,0,0,0,0,7,0,4,0,0,0,0,0,3,13,8,0,0,0];


var setStateResults = function(state){

	theStates[state].winner = null;

	if(candidate1.electionResults[state] > candidate2.electionResults[state]){
		theStates[state].winner = candidate1;
	} else if (candidate1.electionResults[state] < candidate2.electionResults[state]){
		theStates[state].winner = candidate2;
	}
	var stateWinner = theStates[state].winner;
	
	if(stateWinner !== null){
		theStates[state].rgbColor = stateWinner.partyColor;
	} else{
		theStates[state].rgbColor = [245,141,136];
	}

	if (candidate1.totalVotes > candidate2.totalVotes){
		winner = candidate1.name;
	} else if (candidate1.totalVotes < candidate2.totalVotes){
		winner = candidate2.name;
	} else {
		winner = "It's a tie!";
	}

	var countryTable = document.getElementById("countryResults");
	var countryHeader = countryTable.children[0].children[0];
	countryHeader.children[0].innerText = candidate1.name; 
	countryHeader.children[1].innerText = candidate1.totalVotes;
	countryHeader.children[2].innerText = candidate2.name;
	countryHeader.children[3].innerText = candidate2.totalVotes;
	countryHeader.children[5].innerText = winner;

	var stateInfoTable = document.getElementById("stateResults");
	var header = stateInfoTable.children[0];
	var body = stateInfoTable.children[1];
	var stateName = header.children[0].children[0];
	var abbrev = header.children[0].children[1];
	var candidate1Name = body.children[0].children[0];
	var candidate1Results = body.children[0].children[1];
	var candidate2Name = body.children[1].children[0];
	var candidate2Results = body.children[1].children[1];
	var winnersName = body.children[2].children[1];	
	stateName.innerText = theStates[state].nameFull;
	abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
	candidate1Name.innerText = candidate1.name;
	candidate1Results.innerText = candidate1.electionResults[state];
	candidate2Name.innerText = candidate2.name;
	candidate2Results.innerText = candidate2.electionResults[state];
	if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
	} else {
    winnersName.innerText = theStates[state].winner.name;
	}
};

candidate1.tallyVotes();
candidate2.tallyVotes();


