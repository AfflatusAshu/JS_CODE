function validate(){
var x=document.forms["myForm"]["firstname"].value;
var y=document.forms["myForm"]["checkme"].value;
if(x===""||y===""){
	alert("fill the inputs");
	return false;
}
}