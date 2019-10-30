import React, { useState, useEffect } from "react";
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";

import "./App.css";

const App = () => {
  const APPID = "4b8e16348db10af81b952f49bbb48318";
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const geoLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;
    const res = await Axios.get(url);
    const { data } = res;
    setCurrent(data);
  };
  const getHourlyTemp = async coords => {};

  const getAll = async () => {
    try {
      const { coords } = await geoLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch (error) {
      alert("위치 제발  동의해주세요");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header className="header-padding">
        <h1>일기예보</h1>
      </header>
      <main className="container">
        {!current ? <Spinner /> : <Current current={current} />}

        <Forecast />
      </main>
    </>
  );
};

export default App;
