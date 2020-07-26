import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  Top,
  Degrees,
  Location,
  Wrapper,
  CurrentDate,
  Celsius,
  LocationInfo,
} from "./styles";
import { conditions } from "../../utils/conditions";
import { View, Animated } from "react-native";

export const Header = ({ date, currentWeather, country, city, translateY }) => {
  console.log(translateY);
  return (
    <Container>
      <LocationInfo
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-380, 0, 0],
                outputRange: [-10, 0, 0],
                extrapolate: "clamp",
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [-380, 0, 0],
            outputRange: [0, 1, 1],
          }),
        }}
      >
        <Location>{city}</Location>
        <Location>{country}</Location>
      </LocationInfo>
      <Wrapper
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-380, 0, 0],
                outputRange: [-80, 0, 0],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Title>Hoje</Title>
        <CurrentDate>{date}</CurrentDate>
        <Top>
          {currentWeather && (
            <>
              <MaterialCommunityIcons
                name={conditions[currentWeather.weather[0].main].icon}
                size={40}
                color="white"
              />
              <Degrees>{Math.round(currentWeather.main.temp)}</Degrees>
              <Celsius>°C</Celsius>
            </>
          )}
        </Top>
        <CurrentDate>{currentWeather.weather[0].description}</CurrentDate>
      </Wrapper>
    </Container>
  );
};
