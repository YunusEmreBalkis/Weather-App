var input = document.querySelector(".inputvalue")
const button = document.querySelector(".submit");
const namey = document.querySelector(".name");
const temp = document.querySelector(".temp");


button.addEventListener("click",weather);

function weather(name){

	fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+input.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "API-KEY",
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


