$(function(){
	$("#car_move").click(function(){
		$("#car_in").animate({"margin-right":0},200);
	});
	$("#car_close").click(function(){
		$("#car_in").animate({"margin-right": -550},200);
	});
});
