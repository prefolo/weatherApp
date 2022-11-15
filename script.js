async function getJsonFromAPI(location) {
	let data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cfda62c151784ee968d3d5cafba3c01c`
	);

	let json = await data.json();

	return json;
}

async function getRequiredData(location) {
	let json = await getJsonFromAPI(location);

	const data = {
		city_name: json.name,
		city_country: json.sys.country,
		temp: json.main.temp,
		temp_percepita: json.main.feels_like,
		temp_max: json.main.temp_max,
		temp_min: json.main.temp_min,
		humidity: json.main.humidity,
		pressure: json.main.pressure,
		wind_speed: json.wind.speed,
		wind_degree: json.wind.deg,
	};

	console.log(json, data);
}

getRequiredData('Maglie');

const searchInput = document.querySelector('input');

document.querySelector('form').addEventListener('submit', (event) => {
	const cityName = searchInput.value;

	getRequiredData(cityName);

	event.preventDefault();
});
