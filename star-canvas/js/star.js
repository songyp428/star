
var can;
var ctx;
var w;
var h;
var girlImg =new Image();//女孩图片
var starImg = new Image();//绘制星星
var num =50;//星星总数
var stars =[];//总的星星
var lasttime;//最后绘制星星的时间
var delaytime;
var Flag = false;//记录鼠标是否在图片上
var life = 0;//透明度
function init(){
	can = document.getElementById("star");
	ctx = can.getContext("2d");
	w = can.width;
	h = can.height;
	
	document.addEventListener("mousemove",mousemove,false);//添加鼠标事件
	
	girlImg.src ="img/girl.jpg";
	starImg.src = "img/star.png";
	for(var i=0;i<num;i++){
		var obj = new objStar();
		stars.push(obj);
		stars[i].init();
	}
	lasttime = Date.now();
	gameLog();	
}

document.body.onload = init;

function gameLog(){
	window.requestAnimFrame(gameLog);
	var now = Date.now();
	delaytime = now - lasttime; //记录两幅帧动画的时间间隔
	lasttime = now;
//	console.log(delaytime)
	drawBackground();
	drawGirl();
	drawStar();
	aliveUpdate();
}
///绘制背景
function drawBackground(){
	ctx.fillStyle ="#393550";
	ctx.fillRect(0,0,w,h);
}
//绘制女孩图片
function drawGirl(){
	ctx.drawImage(girlImg,100,150,600,300)
}
//鼠标事件
function mousemove(e){
	//记录鼠标的移动位置
	if(e.offsetX || e.offsetY){
		var px = e.offsetX ==undefined?e.layerX : e.offsetX;
		var py = e.offsetY ==undefined?e.layerY : e.offsetY;
		//px在图片范围内&&py在图片范围内  Flag=true 否则Flag = false
		if(px>100 && px<700 && py>150 && py<450){
			Flag = true;
		}
		else{
			Flag = false;
		}
	}
}
