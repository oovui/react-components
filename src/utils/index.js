
const pxToNumber = function(pxStr){	
	let number = 0;
	pxStr = pxStr.trim();
	if(pxStr.endsWith("px")){
		number = pxStr.slice(0,pxStr.length-2);
	}else{
		number = pxStr;
	}
	//Object.is(NaN,NaN)=>true
	number = Object.is(Number(number),NaN)?0:Number(number);
	return Number(number);
}


export  {
	pxToNumber
}