import React from "react";
import { MaterialIcons, SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  Container,
  TabsContainer,
  TabText,
  TabItem,
  TabValue,
  Row,
} from "./styles";

export const Tabs = ({ currentWeather, translateY }) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [-380, 0, 0],
              outputRange: [-20, 0, 0],
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
      <TabsContainer>
        <TabItem>
          <Row>
            <TabText>Min</TabText>
            <MaterialIcons name="keyboard-arrow-down" size={45} color="black" />
          </Row>
          <TabValue>
            {currentWeather && Math.round(currentWeather.main.temp_max)}°C
          </TabValue>
        </TabItem>
        <TabItem>
          <Row>
            <TabText>Max</TabText>
            <MaterialIcons name="keyboard-arrow-up" size={45} color="black" />
          </Row>
          <TabValue>
            {currentWeather && Math.round(currentWeather.main.temp_min)}°C
          </TabValue>
        </TabItem>
      </TabsContainer>
      <TabsContainer>
        <TabItem>
          <Row>
            <TabText>Humidade</TabText>
            <SimpleLineIcons name="drop" size={40} color="black" />
          </Row>
          <TabValue>{currentWeather && currentWeather.main.humidity}%</TabValue>
        </TabItem>
        <TabItem>
          <Row>
            <TabText>Vento</TabText>
            <Feather name="wind" size={40} color="black" />
          </Row>
          <TabValue>{currentWeather && currentWeather.wind.speed}m/s</TabValue>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};
