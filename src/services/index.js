import axios from "axios";

const api_key = "7707b3f634215e61e032316fe08c4078";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export async function fetchCurrentWeather(lat, lon) {
  return await api.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=pt_br`
  );
}

export async function fetchDailyWeather(lat, lon) {
  return await api.get(`onecall?lat=${lat}&lon=${lon}&
exclude={current,minutely,hourly}&appid=${api_key}&units=metric&lang=pt_br`);
}
