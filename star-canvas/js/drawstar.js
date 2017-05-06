//
var objStar = function(){
	this.x;
	this.y;
	this.Imgno;
	this.timer;
	this.xspd;//星星移动的x轴上的速度
	this.yspd;///星星移动的y轴上的速度
}

objStar.prototype.init = function(){
	this.x = Math.random()*600+100;
	this.y = Math.random()*300+150;
	this.Imgno = Math.floor(Math.random()*7);
	this.timer =0;
	this.xspd = Math.random()*3 - 1.5;
	this.yspd = Math.random()*3 - 1.5;
}
objStar.prototype.update = function(){
	//若星星超出图片，重生星星
	this.x +=this.xspd*delaytime*0.004;
	this.y +=this.yspd*delaytime*0.004;
	//若this.x超过范围 init
	if(this.x <100 ||this.x>700){
		this.init();
		return ;
	}
	//若this.y超过范围 init
	if(this.y <150 ||this.y>450){
		this.init();
		return ;
	}
	//星星移动
	this.timer +=delaytime;
	if(this.timer > 50){
		this.Imgno +=1;
		this.Imgno %=7;
		this.timer =0 ;
	}
	
}
objStar.prototype.draw  =function(){
	//save()
	//globalAlpha 全局透明度
	ctx.save();
	ctx.globalAlpha = life;//[0,1]
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
	ctx.drawImage(starImg,this.Imgno*7,0,7,7,this.x,this.y,7,7);
	//restore()
	ctx.restore();
}

function drawStar(){
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate(){
	if(Flag){
		life +=0.03*delaytime*0.05;
		if(life>1){
			life =1;
		}
	}else{
		life -=0.03*delaytime*0.05;
		if(life<0){
			life =0;
		}
	}
}
