function mode(sentence) {
	let counted = sentence.reduce((acc, curr) => { 
	        if (curr in acc) {
	            acc[curr]++;
	        } else {
	            acc[curr] = 1;
	        }

	        return acc;
	    }, {});

    let mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

    return mode;
}

function frequentElementInString() {
	var sentence = prompt("Write a sentence: ").toLowerCase().replace(/ /g, '');
	
	alert(mode(sentence.split('')));
}