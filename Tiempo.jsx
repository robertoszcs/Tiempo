import { View, Text, Image } from "react-native";
import React from "react";
import { useEffect, useState } from "react";

const Tiempo = ({ nombre }) => {
  const [ciudad, setCiudad] = useState(null);
  const [foto, setFoto] = useState(null);
  const [viento, setViento] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [temperatura, setTemperatura] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=e52b6455eed243148c7205407240909&q=${nombre}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCiudad(data.location.name);
        setFoto(data.current.condition.icon);
        setViento(data.current.wind_kph);
        setHumedad(data.current.humidity);
        setTemperatura(data.current.heatindex_c);
      });
  }, []);

  return (
    <View
      style={{
        alignItems: "center",
        borderWidth: 2,
        borderColor: "blue",
        margin: 5,
        padding: 5,
        borderRadius: 10,
      }}
    >
      {foto && (
        <Image
          source={{ uri: `http:${foto}` }}
          style={{ width: 100, height: 100 }}
        />
      )}
      <Text style={{ fontSize: 30 }}>{temperatura}°</Text>
      <Text style={{ textAlign: "center", fontSize: 30 }}>{ciudad}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text style={{ fontSize: 20 }}>{humedad}%</Text>
          <Image
            source={require("./Images/humidity.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text style={{ fontSize: 20 }}>{viento}km/h</Text>
          <Image
            source={require("./Images/wind.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Tiempo;
