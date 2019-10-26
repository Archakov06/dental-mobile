import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const PlusButton = ({ onPress }) => (
  <Circle onPress={onPress}>
    <Ionicons name="ios-add" size={36} color="white" />
  </Circle>
);

const Circle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  elevation: 4;
  shadow-opacity: 0.4;
  shadow-radius: 3.5;
`;

export default PlusButton;
