var value = 64;

if(value >= 10) {
	value += 9;
} else {
	value -= 5;
}

value += "28";

var valueArray = [];

for(i = 0; i < value.length; i++) {
	valueArray[i]=value.charAt(i);
}

valueArray.pop();
valueArray.shift();

var backwards = function() {
	for(i = valueArray.length; i > 0; i--) {
		backwards = valueArray[1] + valueArray[0];
	}
}


backwards();

value = parseInt(value);
backwards = parseInt(backwards);

value = value + backwards;

if(value > 1954){
	value = 56;
} else if(value == 1852) {
	value = 19;
} else {
	value = 91;
}

var counter = 11;

while(counter >0) {
     value++;
     counter--;
     
}

function stringChange(val) {
	val = val.toString();
	if(val.length > 1) {
		val = val.substr(1);
	} 
	return val;
	
}	

value = stringChange(value);
console.log(value);