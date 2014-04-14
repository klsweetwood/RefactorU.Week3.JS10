// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/


var splice = function(arr, start, numToReplace, replace) {
	var output = [];
	var replaceArray = [];	
	for (i=3; i<arguments.length; i++) { 
		replaceArray.push(arguments[i]);
	}
	if (start > arr.length){
		output = arr.concat(replaceArray);
	}
	else{
		for (var j=0; j<arr.length; j++) {
			if (j < start || j >= start + numToReplace) {
				if (numToReplace === 0 && j === start) {
					output = output.concat(replaceArray);
				}
				output.push(arr[j]);
			}
			else if (j === start) {
				output = output.concat(replaceArray);
			}
		
		}
	}
	return output;
};

