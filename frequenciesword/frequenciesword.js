function frequenciesword(){
	const unordered = {
		"k": "1",
		"x": "2",
		"a": "3"
	};
	const ordered = [];
	var res = Object.keys(unordered).sort(function (a,b){return b-a;}).forEach(function (key,index){
		ordered [key] = unordered[key];
	});
	return ordered;
}

console.log(frequenciesword());
module.exports = frequenciesword;
	

		
		




