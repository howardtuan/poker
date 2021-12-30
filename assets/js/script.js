$(function(){
	var dir=-1;
	var interval=3330;
	var duration=700;
	var timer;
	$("#slide ul").prepend($("#slide li:last-child"));
	$("#slide ul").css("left" ,-1110);
	timer=setInterval(slideTimer, interval);
	function slideTimer(){
		if (dir==-1) {
			$("#slide ul").animate({"left":"-=1110px"},duration,function(){
			$(this).append($("#slide li:first-child"));
			$(this).css("left",-1110);
		});
		}else{
			$("#slide ul").animate({"left":"+=1110px"},duration,function(){
			$(this).prepend($("#slide li:last-child"));
			$(this).css("left",-1110);
			dir = -1;
			});
		}
	}
$("#prevBtn").click(function(){
	dir = 1;
	clearInterval(timer);
	timer = setInterval(slideTimer, interval);
	slideTimer();
});
$("#nextBtn").click(function(){
	dir = -1;
	clearInterval(timer);
	timer = setInterval(slideTimer, interval);
	slideTimer();
});
});