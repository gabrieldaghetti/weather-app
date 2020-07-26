import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled(Animated.View)`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TabsContainer = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-bottom: 15px;
`;

export const TabItem = styled.View`
  width: 170px;
  height: 120px;
  background: white;
  border-radius: 20px;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-items: center;
`;

export const TabValue = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
