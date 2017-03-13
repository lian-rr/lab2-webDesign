

function changeText(text){
	document.getElementById("response").innerHTML = text;	
}

window.onload = function(){
	// document.getElementById("btn1").addEventListener("click", changeText("Hello"));
	var aux = document.getElementById("btn1");
	aux.onclick = changeText("Hello");
	// document.getElementById("btn1").onclick = changeText("Hello");
}


function Button2(){		
	changeText("Hello 2");	
}