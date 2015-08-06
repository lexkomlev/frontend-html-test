/*Использовать эту функцию для отображения нужного значения на прогресс-баре.
Она устанавливает число в .progress-text и ширину  элемента, отображающего 
полоску в браузерах, не поддерживающих тег progress
*/
function setProgress(element,value){
	try{
		if(HTMLProgressElement){
			var maxValue = element.children(".progress-line").attr("max");
			element.children(".progress-line").attr("value",100*value/maxValue);
		}
	}
	catch(e){
		element.children(".unsupportedBar").css("width",value+"%");
	}
	element.children(".progress span").text(value+"%");
}

$(document).ready(function(){
	
	//здесь число в .progress-text инициализируется, т.е. устанавливается в соответствии с value тега progress
	try{
		if(HTMLProgressElement){
			var progressElements = $(".progress");
			progressElements.each(function(){
				var progressValue = $(this).children(".progress-line").attr("value");
				var maxValue = $(this).children(".progress-line").attr("max");
				var progressPercent = 100*progressValue/maxValue;
				setProgress($(this),progressPercent);
			});
		}
	}
	catch(e){
		//здесь для браузеров не поддерживающих тег progress задаётся элемент, который будет отображать полоску
		var progressElements = $(".progress");
		progressElements.prepend('<div class="unsupportedBar"></div>');
		progressElements.each(function(){
			var progressValue = $(this).children(".progress-line").get()[0].getAttribute("value");
			var maxValue = $(this).children(".progress-line").get()[0].getAttribute("max");
			var progressPercent = 100*progressValue/maxValue;
			setProgress($(this),progressPercent);
		});
	}
	
	//раскомментировать, чтобы посмотреть пример работы с setProgress
	//progressExample();
});

//Пример работы с setProgress, функция заполняет прогресс-бар с нуля до ста
function progressExample(){
	var step = 0;
	var progressBarObj = $(".progress");
	var stepInterval = window.setInterval(function(){
		setProgress(progressBarObj,step);
		step++;
		if(step>100){clearInterval(stepInterval);}
	},40);
}