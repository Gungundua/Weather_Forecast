const apiKey = 'c85977ee39d749a58b452557241607';
const locationInput = document.getElementById('location');
const searchButton = document.getElementById('search');
const locationElement = document.getElementById('cityname');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', (e) => {
    const address = locationInput.value;
    e.preventDefault()
    // console.log(address)
    fetchWeather(address);
});
async function fetchWeather(address) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${address}`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new error("network response not ok!")
        }
        const weatherData = await response.json();
        console.log(weatherData)
            locationElement.innerHTML = weatherData.location.name;
            temperatureElement.innerHTML = `${weatherData.current.temp_c} °C`;
            descriptionElement.innerHTML = weatherData.current.condition.text;
    } 
    catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data. Please try again later.');
    }
}