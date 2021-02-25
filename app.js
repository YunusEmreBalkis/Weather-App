var input = document.querySelector(".inputvalue")
const button = document.querySelector(".submit");
const namey = document.querySelector(".name");
const temp = document.querySelector(".temp");


button.addEventListener("click",weather);

function weather(name){

	fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+input.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "737b725379msh219e2f7870f346ap11e5bejsn9f752551c1d2",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
	
	console.log(data);
	const tempvalue = data["main"]["temp"];
	const tempar = Math.round(tempvalue);
	const nameValue = data["name"];
  	const descValue = data['weather'][0]['description'];
	console.log(namey);
	  namey.innerHTML = nameValue;
	  temp.innerHTML = Math.round(tempvalue)-273;
	  input.value ="";

})	

}

























// fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Roma", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "737b725379msh219e2f7870f346ap11e5bejsn9f752551c1d2",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });