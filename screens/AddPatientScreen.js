import React, { useState } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Item, Input, Label } from 'native-base';
import styled from 'styled-components';

import { patientsApi } from '../utils/api';

import { Button, Container } from '../components';

const AddPatientScreen = ({ navigation }) => {
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
        <Label>Имя и Фамилия</Label>
        <Input
          onChange={handleChange.bind(this, 'fullname')}
          value={values.fullname}
          style={{ marginTop: 12 }}
          autoFocus
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Номер телефона</Label>
        <Input
          onChange={handleChange.bind(this, 'phone')}
          value={values.phone}
          keyboardType="numeric"
          dataDetectorTypes="phoneNumber"
          style={{ marginTop: 12 }}
        />
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} color="#87CC6F">
          <Ionicons name="ios-add" size={24} color="white" />
          <Text>Добавить пациента</Text>
        </Button>
      </ButtonView>
    </Container>
  );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

AddPatientScreen.navigationOptions = {
  title: 'Добавить пациента',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8,
  },
};

export default AddPatientScreen;
