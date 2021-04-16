console.log('hello')

let todo=["Wake up at '6'o clock","Office at '10'o clock",];

function showAll(){
	let result = '<ul>'
		todo.forEach((data,i)=>{
		    result+='<li>'+data+'</li>'
		});

		result+='</ul>';

document.getElementById('result').innerHTML=result;
}

showAll();
function addData(){
		if(document.getElementById('data').value===""){
		alert("please enter some value");
		return false;
	}
	else{
		todo.push(document.getElementById('data').value)
	showAll();

	}
}
