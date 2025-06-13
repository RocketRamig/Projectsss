// http://api.weatherapi.com/v1/current.json?key=a09a13e5948f4af4a80225721251106&q=Madison&aqi=no
import { useState, useEffect } from "react";

export default function WeatherApp() {
  // useStates
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
  let [search, setSearch] = useState("");
  let [temp_f, setTemp_f] = useState("");
  let [temp_c, setTemp_c] = useState("");
  let [city, setCity] = useState("");
  let [uv, setUv] = useState("");
  let [condition, setCondition] = useState("");
  let [wind_mph, setWind_mph] = useState("");
  let [wind_kph, setWind_kph] = useState("");
  let [wind_degree, setWind_degree] = useState("");
  let [conditionImg, setConditionImg] = useState("");

  // Geo Locating
  function success(pos) {
    const crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }

  function err(err) {
    console.log(err);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, err);
  }, []);

  useEffect(() => {
    if (latitude && longitude !== 1) {
      console.log(latitude);
      fetchResults(`${latitude},${longitude}`);
    }
  }, [latitude, longitude]);

  const fetchResults = async (targetLocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=a09a13e5948f4af4a80225721251106&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    setTemp_f(await data.current.temp_f);
    setTemp_c(await data.current.temp_c);
    setCity(await data.location.name);
    setCondition(await data.current.condition.text);
    setWind_kph(await data.current.wind_kph);
    setWind_mph(await data.current.wind_mph);
    setUv(await data.current.uv);
    setWind_degree(await data.current.wind_degree);
    setConditionImg(await data.current.condition.icon);
  };

  function searchForLocation() {
    fetchResults(search);
  }

  return (
    <>
      <input
        id="search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => searchForLocation()}>search</button>
      <p>temp_f:{temp_f}</p>
      <p>temp_c:{temp_c}</p>
      <p>City:{city}</p>
      <p>Condition:{condition}</p>
      <img alt="eslint is a bitch" src={conditionImg} />
      <p>wind_mph:{wind_mph}</p>
      <p>wind_kph:{wind_kph}</p>
      <p>uv:{uv}</p>
      <p>wind_degree:{wind_degree}</p>
    </>
  );
}
