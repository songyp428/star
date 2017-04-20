var flag = false, sum = 0, ope,
inputValue = document.getElementById("input"),
btns = document.getElementsByTagName("button");

//clear screen
function clear() {
	inputValue.value = "0";
	sum = 0; //存放结果
	flag = false; //没有接受操作符
	ope = null;
}
//delete digit
function deleteNumber(){
	if(inputValue.value.length<=1){
		inputValue.value = 0;
	}
	else{
		inputValue.value = inputValue.value.slice(0,inputValue.value.length-1);
	}
	
}

//get digit
//screen获取数字
function getNum(num) {
	if(flag) {
		inputValue.value = num;
		flag = false; //接受过运算符，文本框清零
	} else {
		if(inputValue.value === "0") {
			inputValue.value = num;
		} else {
			inputValue.value += num;
		}
	}
}
//防止出现两个.
function dot(){
	if(inputValue.value.indexOf(".")==-1){
		inputValue.value+=".";
	}
}

 
//二元Operation
function calc(op) {
	var result = document.getElementById("input").value*1;//Number
	if(inputValue.value ==""){
		inputValue.value = 0;
	}
	flag = true ;
	switch(ope){
		case "+":
			sum+=result;
			break;
		case "-":
			sum-=result;
			break;
		case "*":
			sum*=result;
			break;
		case "/":
			sum/=result;
			break;
		case "%":
			sum%=result;
			break;
		case "=":
		    break;
		default:
			sum = parseFloat(result);
			break;
	}
	inputValue.value = sum;
	ope = op;
}

//deal
for(let i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		//input_show(btns[i]);
		switch(btns[i].childNodes[0].nodeValue) {
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				getNum(btns[i].childNodes[0].nodeValue);
				break;
			case ".":
				dot();
				break;
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
			case "=":
				calc(btns[i].childNodes[0].nodeValue);
				break;
			case "x":
			    deleteNumber();
			    break;
			case "c":
				clear();
				break;
			default:
				break;
		}
	}
}