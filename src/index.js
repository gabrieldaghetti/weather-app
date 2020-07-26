import React, { useState, useEffect } from "react";
import { ActivityIndicator, Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/pt-br";

import { Header } from "./components/Header";
import { WeatherForecast } from "./components/WeatherForecast";
import { Tabs } from "./components/Tabs";
import { fetchCurrentWeather, fetchDailyWeather } from "./services";
import { Container, Wrapper, Card, Title, BottomBar } from "./styles";

moment.locale("pt_br");

export default function App() {
  const translateY = new Animated.Value(0);
  let offset = 0;

  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [dailyWeather, setDailyWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords);

        await getCurrentWeather(location);
        await getDailyWeather(location);

        setCountry(address[0].country);
        setDate(moment(location.timestamp).format("ll"));

        setLoading(false);
      } catch (error) {}
    })();
  }, []);

  async function getCurrentWeather({ coords }) {
    await fetchCurrentWeather(coords.latitude, coords.longitude).then(
      (response) => {
        setCity(response.data.name);
        setCurrentWeather(response.data);
      }
    );
  }

  async function getDailyWeather({ coords }) {
    await fetchDailyWeather(coords.latitude, coords.longitude).then(
      (response) => {
        setDailyWeather(response.data.daily);
      }
    );
  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { translationY: translateY },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = true;
      const { translationY } = event.nativeEvent;

      offset += translationY;
      if (translationY <= -50) {
        opened = false;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 0 : -380,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 0 : -380;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <>
      <StatusBar style="light" />
      <Container>
        {loading ? (
          <Wrapper>
            <ActivityIndicator color="white" size={60} />
          </Wrapper>
        ) : (
          <>
            <Header
              date={date}
              currentWeather={currentWeather}
              country={country}
              city={city}
              translateY={translateY}
            />
            <Tabs currentWeather={currentWeather} translateY={translateY} />
            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChanged}
            >
              <Card
                style={{
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-380, 0, 0],
                        outputRange: [-380, 0, 0],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              >
                <BottomBar>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={25}
                    color="black"
                  />
                  <Title>Esta Semana</Title>
                </BottomBar>

                <WeatherForecast dailyWeather={dailyWeather} />
              </Card>
            </PanGestureHandler>
          </>
        )}
      </Container>
    </>
  );
}
