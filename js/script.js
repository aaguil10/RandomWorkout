



var upperChestIndexList = randomList(upper.length);
var upperChestIndex = 0;
document.getElementById("upperChestImg").src = "images/" + 
	upper[upperChestIndexList[upperChestIndex]];

function upperChestClick() {
	upperChestIndex++;
	if(upperChestIndex == upper.length){
		upperChestIndex = 0;
	}
	document.getElementById("upperChestImg").src = "images/" + 
		upper[upperChestIndexList[upperChestIndex]];
}


var middleChestIndexList = randomList(middle.length);
var middleChestIndex = 0;
document.getElementById("middleChestImg").src = "images/" +
	middle[middleChestIndexList[middleChestIndex]];

function middleChestClick() {
	middleChestIndex++;
	if(middleChestIndex == middle.length){
		middleChestIndex = 0;
	}
	document.getElementById("middleChestImg").src = "images/" + 
		middle[middleChestIndexList[middleChestIndex]];
}




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