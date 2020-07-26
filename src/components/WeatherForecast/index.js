import React from "react";
import { View, Text, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { Row, Info, Container, Wrapper, Date } from "./styles";
import { conditions } from "../../utils/conditions";

export const WeatherForecast = ({ dailyWeather }) => {
  return (
    <Container>
      <FlatList
        data={dailyWeather}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Row key={index}>
            <Date>{moment.unix(item.dt).format("dddd")}</Date>
            <Wrapper>
              <MaterialCommunityIcons
                name={conditions[item.weather[0].main].icon}
                size={25}
              />
              <Info>{Math.round(item.temp.day)}°C</Info>
            </Wrapper>
          </Row>
        )}
      />
    </Container>
  );
};
