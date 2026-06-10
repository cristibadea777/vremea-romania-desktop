import axios from "axios";

export async function getWeatherByCity(city, apiKey) {
  if (!apiKey) {
    throw new Error("Lipsește cheia OpenWeather.");
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  return response.data;
}