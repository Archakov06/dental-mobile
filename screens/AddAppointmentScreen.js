import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Item, Input, Label, Picker, DatePicker } from 'native-base';
import styled from 'styled-components';
import DateTimePicker from '@react-native-community/datetimepicker';

import { patientsApi } from '../utils/api';

import { Button, Container } from '../components';

const AddAppointmentScreen = ({ navigation }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text,
    });
  };

  const onSubmit = () => {
    patientsApi
      .add(values)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(e => {
        alert('BAD');
      });
  };

  return (
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>Номер зуба</Label>
        <Input
          onChange={handleChange.bind(this, 'dentNumber')}
          value={values.fullname}
          style={{ marginTop: 12 }}
          keyboardType="numeric"
          autoFocus
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <Picker
          mode="dropdown"
          placeholder="Выберите диагноз"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          style={{ width: '100%' }}>
          <Picker.Item label="пульпит" value="1" />
          <Picker.Item label="удаление зуба" value="2" />
          <Picker.Item label="спид" value="3" />
        </Picker>
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Цена</Label>
        <Input
          onChange={handleChange.bind(this, 'price')}
          value={values.phone}
          keyboardType="numeric"
          style={{ marginTop: 12 }}
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <TimeRow>
          <DateTimePicker
            value={new Date('2020-06-12T14:42:42')}
            mode="date"
            is24Hour={true}
            display="default"
          />
        </TimeRow>
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} color="#87CC6F">
          <Ionicons name="ios-add" size={24} color="white" />
          <Text>Добавить приема</Text>
        </Button>
      </ButtonView>
    </Container>
  );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const TimeRow = styled.View`
  flex-direction: row;
`;

AddAppointmentScreen.navigationOptions = {
  title: 'Добавить прием',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8,
  },
};

export default AddAppointmentScreen;
