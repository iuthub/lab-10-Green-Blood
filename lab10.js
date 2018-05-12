// task1
function ComputeBMI(weight, height){
	return 703*weight/(height*height);
}
// task2
function calculate(){
	var w = document.getElementById("weight").value;
	var h = document.getElementById("height").value;
	var res = ComputeBMI(w,h);
	document.getElementById("score").innerHTML=res;
	var type = "Undefined";
	if(res<18){
		type = "Underweight";
	}else if(res>=18 && res<25){
		type = "Normal";
	}else if(res>=25 && res<30){
		type = "Overweight";
	}else if(res>=30){
		type = "Obese";
	}
	document.getElementById("type").innerHTML=type;
}
// task3
function grow(){
	var row = document.getElementById("rows").value;
	var col = document.getElementById("columns").value;
	var put_img = document.getElementById("garden");

	if(put_img.hasChildNodes()){
		put_img.removeChild(put_img.childNodes[0]);
	}

	var table = document.createElement('table');
	table.style.borderCollapse = "collapse";
	for(var i=0;i<row;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<col;j++){
			var td = document.createElement('td');
			td.style.width = "100px";
			td.style.height = "100px";
			var img = document.createElement('img');
			if(Rand()==1){
				img.src = "img/rose.jpeg";	
			}else{
				img.src = "img/Daffodil.jpg";
			}			
			img.style.width = "100%";
			img.style.height = "100%";
			td.appendChild(img);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	put_img.appendChild(table);
}
function Rand(){
	var rand = Math.random();
	if(rand<=0.5){
		return 1;
	} else if(rand<=1){
		return 2;
	}
}
// task4
function convert(){
	var m = document.getElementById("m").value;
	var sel1 = document.getElementById("sel1").value;
	var sel2 = document.getElementById("sel2").value;
	var ans;

	if(sel1==sel2){
		ans=m;
	}else if(sel1=="kg"){
		ans = 2.20462262*m;
	} else{
		ans = 0.45359237*m;
	}
	document.getElementById("answer").innerHTML=ans;
}




