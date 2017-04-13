	window.onload = function(){
				//获取容器
				var box = document.getElementById("box");
				//获取图片集
				var imgs = document.getElementsByTagName("img");
				
				var imgWidth = imgs[0].offsetWidth;
				var exposeWidth = 160;
				
				//设定容器的宽度:第一张图片的宽度+（图片总数-1）*露出的部分
				var Boxwidth = imgWidth+(imgs.length-1)*exposeWidth;
				box.style.width = Boxwidth +"px";
//				console.log(box.style.width)
				//初始化图片布局：第一张图片全露出来，其余只显示exposeWidth部分
				function init(){
					for(var i=1;i<imgs.length;i++){
						imgs[i].style.left = (i-1)*exposeWidth+imgWidth+"px";
					}
				}
				init();
				//当鼠标移至图片时：先初始化图片布局，再把相应图片左移
				var tranWidth = imgWidth - exposeWidth;
				for(var i=0;i<imgs.length;i++){
					(function(i){
						imgs[i].onmouseover = function(){
							init();
							for(var j=1;j<=i;j++){
								imgs[j].style.left = parseInt(imgs[j].style.left,10)-tranWidth+"px";
//								console.log(imgs[j].style.left);
							}
						}
					})(i);
				}
				
			};