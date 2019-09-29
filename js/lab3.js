for( let i=0; i<=10; ++i){
	console.log(i);
}

for( let i=10; i>=0; --i){
	console.log(i);
}

function count10(){
	for( let i=0; i<=10; ++i){
	document.getElementById("count").innerHTML += i+ "<br>";

}
}

var forgSize = '100px';
var countTotal = 0;

function getBig(){
	++countTotal;
	countBig = parseInt(forgSize) * (countTotal * 0.1);
	console.log(forgSize);
	document.getElementById('forg').style.fontSize = countBig;
}
