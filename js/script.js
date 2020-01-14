function randomList(length) {
	var top = length-1;
	var tracker = new Array(length);
	var result = new Array(length);
	for(var i = 0; i < length; i++) {
		var current = Math.floor(Math.random() * length); 
		if(tracker[current] == -1){
			var curr = current;
			while(tracker[curr] == -1){
				curr++;
				if(curr >= length){
					curr = 0;
				}
			}
			current = curr;
		}
		tracker[current] = -1;
		result[i] = current;	
	}
  return result;
}

function setUpCard(gifList, elementId){
	var indexList = randomList(gifList.length);
	document.getElementById(elementId).src = "images/" +
		gifList[indexList[0]];

	return {
		'index': 0, 
		'indexList': indexList,
		'elementId': elementId,
		'gifList': gifList
	};
}

function gifClick(state) {
	state.index++;
	if(state.index == state.gifList.length){
		state.index = 0;
	}
	document.getElementById(state.elementId).src = "images/" + 
		state.gifList[state.indexList[state.index]];
}