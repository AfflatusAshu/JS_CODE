$.ajax({
	url:"https://jsonplaceholder.typicode.com/users",
	type:"GET",
	success: async function(response){
		console.log(response);
		let res='';
		await response.forEach((data,i)=>{
			res+= data.id +'  '+data.name+ '<br/>'
		})
	document.getElementById('result').innerHTML=res
	}
})