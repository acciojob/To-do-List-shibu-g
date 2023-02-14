//your code here

var to=document.getElementById('inp');
var btn=document.getElementById('btn');
var ol=document.getElementById('list');
function add() {
if(to.value){
	var li=document.createElement('li');
	li.textContent=to.value;
	ol.appendChild(li);
	to.value="";
}
}
btn.addEventListener('click',add);