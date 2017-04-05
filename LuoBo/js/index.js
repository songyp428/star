var page = 1;
var i = 4;//每版四张图片

$(function(){
	
	
	$("span.next").click(function(){
		console.log("ss");
		var $parent = $(this).parents("div.v_shows");//find his parent to find the phtot
		var $v_list = $parent.find("div .list");//
		var $content = $parent.find("div.v_content");
		
		var v_width = $content.width();
		console.log(v_width);
		
		var len = $v_list.find("li").length;
		console.log(len);
		
		var page_count = Math.ceil(len/i);//总的版数
		console.log(page_count);
		
		if(!$v_list.is(":animated")){
			if(page == page_count){
				$v_list.animate({left:0},"slow");
				page = 1;
			}else{
				$v_list.animate({left: "-="+v_width},"slow");
				page++;
			}
		}
		$parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
	});
	
	
	$("span.prev").click(function(){
		console.log("ss");
		var $parent = $(this).parents("div.v_shows");//find his parent to find the phtot
		var $v_list = $parent.find("div .list");//
		var $content = $parent.find("div.v_content");
		
		var v_width = $content.width();
		console.log(v_width);
		
		var len = $v_list.find("li").length;
		console.log(len);
		
		var page_count = Math.ceil(len/i);//总的版数
		console.log(page_count);
		
		if(!$v_list.is(":animated")){
			if(page == 1){
				$v_list.animate({left:'-='+(page_count-1)*v_width},"slow");
				page = page_count;
			}else{
				$v_list.animate({left: "+="+v_width},"slow");
				page--;
			}
		}
		$parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
	});
	
	
});



