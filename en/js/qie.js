// JavaScript Document
$(document).ready(function(){

	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;
	
	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e){
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_image a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".main_visual").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".main_image").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	
});
/*推荐*/
$(document).ready(function(){

	//$(".main_visual-tui").hover(function(){
	//	$("#btn_prev-tui,#btn_next-tui").fadeIn()
	//},function(){
	//	$("#btn_prev-tui,#btn_next-tui").fadeOut()
	//});
	
	$dragBln = false;
	
	$(".main_image-tui").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev-tui"),
		btn_next : $("#btn_next-tui"),
		paging : $(".flicking_con-tui a"),
		counter : function (e){
			$(".flicking_con-tui a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".main_image-tui").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_image-tui").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_image-tui a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next-tui").click();
	}, 5000);
	
	$(".main_visual-tui").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next-tui").click();
		},5000);
	});
	
	$(".main_image-tui").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next-tui").click();
		}, 5000);
	});
	
});
/*资讯banner*/
$(document).ready(function(){

	//$(".main_visual-zx").hover(function(){
	//	$("#btn_prev-zx,#btn_next-zx").fadeIn()
	//},function(){
	//	$("#btn_prev-zx,#btn_next-zx").fadeOut()
	//});
	
	$dragBln = false;
	
	$(".main_image-zx").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev-zx"),
		btn_next : $("#btn_next-zx"),
		paging : $(".flicking_con-zx a"),
		counter : function (e){
			$(".flicking_con-zx a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".main_image-zx").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_image-zx").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_image-zx a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next-zx").click();
	}, 5000);
	
	$(".main_visual-zx").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next-zx").click();
		},5000);
	});
	
	$(".main_image-zx").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next-zx").click();
		}, 5000);
	});
	
});