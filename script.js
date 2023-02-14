//your code here

var to=document.getElementById('newTodoInput');
var btn=document.getElementById('addTodoBtn');
var ol=document.getElementById('todoList');
function add() {
if(to.value){
	var li=document.createElement('li');
	li.textContent=to.value;
	ol.appendChild(li);
	to.value="";
}
}
btn.addEventListener('click',add);