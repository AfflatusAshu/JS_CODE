var obj = {
 "id" : 4, "name" : "abc",
 "id" : 10, "name" : "ab2",
 "id" : 5, "name" : "abc3",
 "id" : 6, "name" : "abc5"
}
//the above given Json is not valid because id is getting duplicated. So I am modifying the given input as given below.

var obj=[
		{"id" : 4, "name" : "abc"},
		{"id" : 10, "name" : "ab2"},
		{"id" : 5, "name" : "abc3"},
		{"id" : 6, "name" : "abc5"}
		]
// I have applied sort method to make the sort of an JSON object

 obj.sort((a,b) => a.id - b.id);
 console.log(obj);
 obj.forEach((data,i)=>{
 	console.log("id:"+data.id+","+"name:"+data.name);
 })
