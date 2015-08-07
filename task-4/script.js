function fillList(){
	var listFounded = document.getElementsByTagName("select");
	for (var i=0;i<listFounded.length;i++){
		if (listFounded[i].getAttribute("name") === "dayOfBirth"){
			for (var j=1;j<=31;j++){
				var textString = "<option value='"+j+"'>"+j+"</option>\n"
				var newOption = document.createElement("option");
				newOption.setAttribute("value",j);
				newOption.innerHTML = j;
				listFounded[i].appendChild(newOption);
			}
		}
		if (listFounded[i].getAttribute("name") === "yearOfBirth"){
			for (var j=1930;j<=2010;j++){
				var textString = "<option value='"+j+"'>"+j+"</option>\n"
				var newOption = document.createElement("option");
				newOption.setAttribute("value",j);
				newOption.innerHTML = j;
				listFounded[i].appendChild(newOption);
			}
		}
	}
}