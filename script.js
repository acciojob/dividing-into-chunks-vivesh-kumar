const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result =[];
	let subarr =[];
	let subarrsum=0;
	for(let num of arr){
			if(subarrsum+num>n){
				result.push(subarr);
				subarr =[];
				subarrsum =0;
				
			}
		subarr.push(num);
		subarrsum +=num;
		
		
		
	}
	if(subarr.length>0){
				result.push(subarr);
	}
	return result;
	
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
