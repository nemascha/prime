module.exports.isPrime = function(n){
	if (n == 1) {
		return false;
	} else if (n == 2) {
		return true;
	} else {
		var k = Math.ceil(Math.sqrt(n));
		for (var i = 3; i < k; i+=2) {
			if (n % i == 0){
				return false;
			}
		}
		return true;
	}
};

