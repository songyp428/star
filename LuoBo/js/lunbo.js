
    var t = n =i=0, count;
    $(document).ready(function(){    
        count=$("#banner_list a").length;
        $("#banner_list a:not(:first-child)").hide();
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
        $("#banner li").click(function() {
            i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
            n = i;
            if (i >= count) return;
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
            $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
            $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner").style.background="";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
        $("#banner .prev").click(function(){
        	console.log("aa");
        	if(i==0){
        		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(count-1).fadeIn(1000);
        		$("#banner li").eq(i-1).toggleClass("on").siblings().removeAttr("class");
        		$("#banner_info").html($("#banner_list a").eq(i-1).find("img").attr('alt'));
        		i = count-1;
        	}else{
        		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i-1).fadeIn(1000);
        	    $("#banner_info").html($("#banner_list a").eq(i-1).find("img").attr('alt'));
        	    $("#banner li").eq(i-1).toggleClass("on").siblings().removeAttr("class");;
        		i--;
        	}
        	
        });
        $("#banner .next").click(function(){
        	console.log("aa");
        	if(i==count-1){
        		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(0).fadeIn(1000);
        		$("#banner li").eq(0).toggleClass("on").siblings().removeAttr("class");
        		$("#banner_info").html($("#banner_list a").eq(0).find("img").attr('alt'));
        		
        		i=0;
        	}else{
        		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i+1).fadeIn(1000);
        		$("#banner li").eq(i+1).toggleClass("on").siblings().removeAttr("class");
        		$("#banner_info").html($("#banner_list a").eq(i+1).find("img").attr('alt'));
        		i++;
        	}
        	
        });
        t = setInterval("showAuto()", 4000);
        $("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});
    })
    
    function showAuto()
    {
        n = n >=(count -1) ?0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }