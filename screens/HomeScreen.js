import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import axios from 'axios';
import Swipeable from 'react-native-swipeable-row';

import { Appointment, SectionTitle } from '../components';
import { appointmentsApi } from '../utils/api';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointments = () => {
    setIsLoading(true);
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      });
  };

  useEffect(fetchAppointments, []);

  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Swipeable rightButtons={[<Text>Left</Text>, <Text>Right</Text>]}>
              <Appointment navigate={navigation.navigate} item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
        />
      )}
      <PlusButton onPress={navigation.navigate.bind(this, 'AddPatient')}>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'Пациенты',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8,
  },
};

const SwipeView = styled.View``;

const PlusButton = styled.TouchableOpacity`
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

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
