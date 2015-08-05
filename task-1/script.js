//здесь записывается текущий рейтинг и убирается chosen у всех выбранных до этого звёзд
function setRating(star){
	star.parent().data("rating",star.prevAll().length+1);
	star.nextAll().removeClass("chosen");
};
//Здесь у всех звёзд, больших по номеру, чем значение рейтинга убирается chosen
function showRating(star){
	var ratingElement = star.parent();
	var start = ratingElement.data("rating");
	var end = ratingElement.children().length;
	for (var i=start;i<end;i++){
		ratingElement.children(":eq("+i+")").removeClass("chosen");
	}
}
	
$(document).ready(function(){
	
	$(".ratingStar").mouseenter(function(){
		$(this).prevAll().andSelf().addClass("chosen");
	});
	$(".ratingStar").mouseleave(function(){
		showRating($(this));
	});
	$(".ratingStar").click(function(){
		setRating($(this));
		//если нужно, чтобы рейтинг был одноразовый, то после оценки отвязываем всю интерактивность
		//$(this).parent().children().unbind();
	});
});