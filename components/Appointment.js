import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText';
import Badge from './Badge';

import getAvatarColor from '../utils/getAvatarColor';

const Appointment = ({ navigate, item }) => {
  const { patient, diagnosis, active, time } = item;
  const avatarColors = getAvatarColor(patient.fullname[0].toUpperCase());
  return (
    <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
      <Avatar
        style={{
          backgroundColor: avatarColors.background
        }}
      >
        <Letter style={{ color: avatarColors.color }}>
          {patient.fullname[0].toUpperCase()}
        </Letter>
      </Avatar>
      <View style={{ flex: 1 }}>
        <FullName>{patient.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      {time && <Badge active={active}>{time}</Badge>}
    </GroupItem>
  );
};

Appointment.defaultProps = {
  groupTitle: 'Untitled',
  items: []
};

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: -1px;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
