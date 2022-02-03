import React, { useState, useEffect } from "react";
import axios from "axios";
import { DailyDisplay } from "./DailyDisplay.comp";
import { DegreeToggle } from "./DegreeToggle.comp";
import { apikey } from "../apikey";

export const Weather = () => {
  const [fullData, setFullData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [degreeType, setDegreeType] = useState("fahrenheit");

  const updateForecastDegree = (e) => {
    setDegreeType(e.target.value);
  };

  useEffect(() => {
    // const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apikey.API_KEY}`;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=94040&units=imperial&APPID=${apikey.API_KEY}`;
    axios.get(weatherUrl).then((res) => {
      // console.log(res.data);
      const dailyData = res.data.list.filter((reading) =>
        reading.dt_txt.includes("18:00:00")
      );
      console.log(dailyData);
      setFullData(res.data.list);
      setDailyData(dailyData);
    });
    console.log("full>>", fullData, "daily>>", dailyData);
  }, []);

  const formatDailyData = () => {
    return dailyData.map((reading, index) => (
      <DailyDisplay reading={reading} key={index} degreeType={degreeType} />
    ));
  };

  return (
    <div className="container">
      <h1 className="display-1">5-day Forecast.</h1>
      <h5 className="display-5 text-mute ">New York, US</h5>
      <DegreeToggle
        updateForecastDegree={updateForecastDegree}
        degreeType={degreeType}
      />
      <div className="row justify-content-center ">{formatDailyData()}</div>
    </div>
  );
};
