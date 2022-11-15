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

	return data;
}

async function displayData(location) {
	const data = await getRequiredData(location);

	document.querySelector(
		'.city-name'
	).textContent = `${data.city_name}, ${data.city_country}`;

	document.querySelector('.temp').textContent = `${data.temp}`;

	document.querySelector(
		'.temp_percepita'
	).textContent = `${data.temp_percepita}`;

	document.querySelector('.temp_max').textContent = `${data.temp_max}`;

	document.querySelector('.temp_min').textContent = `${data.temp_min}`;

	document.querySelector('.humidity').textContent = `${data.humidity}`;

	document.querySelector('.pressure').textContent = `${data.pressure}`;

	document.querySelector('.wind_speed').textContent = `${data.wind_speed}`;

	document.querySelector('.wind_degree').textContent = `${data.wind_degree}`;
}

/* UI events */

const searchInput = document.querySelector('input');

document.querySelector('form').addEventListener('submit', (event) => {
	let cityName = searchInput.value;

	displayData(cityName);

	event.preventDefault();
});

displayData('London');
