import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #005082;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  flex: 1;
  background: white;
  height: 430px;
  bottom: -380px;
  left: 0;
  right: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const BottomBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px 0px 30px;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  padding-left: 10px;
`;
