import "./styles.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Reulsts from "./components/Results";
import getImageSearchResults from "./image_search";

import { useState } from "react";
import axios from "axios";
export default function App() {
  const [city, setCity] = useState("");
  //const [image, setImage] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  //const client = new GoogleImages('b78fcea813ddf1066', 'AIzaSyDckjTiJQyYSWo2Nd0_pCNDR8Ndd_PKAPY');
  const getImgeUrl = (e) => {
    axios.get(getImageSearchResults("cat")).then((res) => {
      console.log(res);
    });
  };

  //   getImageSearchResults({results.cityName}).then((images) => {
  //  console.log(images);
  // });

  const getWeather = (e) => {
    e.preventDefault();
    getImgeUrl();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=ff39ebf1c2d8497f9e773605212611&q=${city}&aqi=no`
      )
      .then((res) => {
        console.log(res);

        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        });
        setCity("");
      })
      .catch((err) =>
        alert(
          "エラーが発生しました。ページを利ロードして、もう一度トライしてください。"
        )
      );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title citeName={city} />
        <Form city={city} setCity={setCity} getWeather={getWeather} />
        <Reulsts results={results} />
      </div>
    </div>
  );
}
