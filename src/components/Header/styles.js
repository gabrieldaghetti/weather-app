import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  padding: 40px 30px 10px 30px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const LocationInfo = styled(Animated.View)``;

export const Location = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Wrapper = styled(Animated.View)`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;

export const Degrees = styled.Text`
  font-size: 65px;
  font-weight: bold;
  padding-left: 10px;
  color: white;
`;

export const Celsius = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  top: 0;
`;

export const CurrentDate = styled.Text`
  color: white;
  font-size: 18px;
`;
