var FirstElement = 0;//First element
var SecondElement = 0;//Second element
//var received = " ";
var op = " ";

function fork(received){
	if(!isNaN(received) && op==" "){
		FirstElement = (" " + FirstElement + received);
		printPreview(parseFloat(FirstElement));
		console.log(FirstElement);
	}else if(!isNaN(received) && op!=" "){
		SecondElement = (" " + SecondElement + received);
		printPreview(parseFloat(SecondElement));
		console.log(SecondElement);
	}else if(received=="." && op==" "){
		FirstElement = (" " + FirstElement + received);
		printPreview(parseFloat(FirstElement));
		console.log(parseFloat(FirstElement));
	}else if(received=="." && op!=" "){
		SecondElement = (" " + SecondElement + received);
		printPreview(parseFloat(SecondElement));
		console.log(parseFloat(SecondElement));
	}else if(received=="+"){
		op = "+";
		console.log(op);
	}else if(received=="-"){
		op = "-";
		console.log(op);
	}else if(received=="/"){
		op = "/";
		console.log(op);
	}else if(received=="*"){
		op = "*";
		console.log(op);
	}else if(received=="c"){
		document.getElementById("lcd").innerHTML = " ";
		console.log(" ");
		op = " ";
		FirstElement = 0;
		SecondElement = 0;
	}else if(received=="="){
		if(op=="+"){
			printEquals(parseFloat(FirstElement)+parseFloat(SecondElement));
			console.log(parseFloat(FirstElement)+parseFloat(SecondElement));
			op = " ";
			FirstElement = parseFloat(FirstElement)+parseFloat(SecondElement);
			SecondElement = 0;
		}
		if(op=="-"){
			printEquals(parseFloat(FirstElement)-parseFloat(SecondElement));
			console.log(parseFloat(FirstElement)-parseFloat(SecondElement));
			op = " ";
			FirstElement = parseFloat(FirstElement)-parseFloat(SecondElement);
			SecondElement = 0;
		}
		if(op=="/"){
			printEquals(parseFloat(FirstElement)/parseFloat(SecondElement));
			console.log(parseFloat(FirstElement)/parseFloat(SecondElement));
			op = " ";
			FirstElement = parseFloat(FirstElement)/parseFloat(SecondElement);
			SecondElement = 0;
		}
		if(op=="*"){
			printEquals(parseFloat(FirstElement)*parseFloat(SecondElement));
			console.log(parseFloat(FirstElement)*parseFloat(SecondElement));
			op = " ";
			FirstElement = parseFloat(FirstElement)*parseFloat(SecondElement);
			SecondElement = 0;
		}
	}

}

function printEquals(valueEquals){
	if((valueEquals%1)===0){
		if(valueEquals<=999){
			document.getElementById("lcd").innerHTML = valueEquals;	
		}else{
			document.getElementById("lcd").innerHTML = (valueEquals.toPrecision(3));
		}
	}else{
		document.getElementById("lcd").innerHTML = (valueEquals.toPrecision(3));
	}
}

function printPreview(valuePreview){
	if (valuePreview<=999 && ((valuePreview%1)===0)) {
		document.getElementById("lcd").innerHTML = valuePreview;
	}else{
		document.getElementById("lcd").innerHTML = (valuePreview.toPrecision(3));	
	}
}

function keyboard(event){
	var FirstElement = event.which || event.keyCode;
	fork(String.fromCharCode(FirstElement));
}

function on(){
	document.getElementById('on_off_btn').src="../img/on.png";
	document.getElementById("lcd").style.display = "block";
	document.getElementById("mask").style.display = "block";
	fork("c");
}

function off(){
	document.getElementById('on_off_btn').src="../img/off.png";
	document.getElementById("lcd").style.display = "none";
	document.getElementById("mask").style.display = "none";
}