import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Foundation, Ionicons } from '@expo/vector-icons';

import { GrayText, Button, Badge } from '../components';

const PatientScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <PatientDetails>
      <PatientFullname>
        {navigation.getParam('user', {}).fullname}
      </PatientFullname>
      <GrayText>{navigation.getParam('user', {}).phone}</GrayText>

      <PatientButtons>
        <FormulaButtonView>
          <Button>Формула зубов</Button>
        </FormulaButtonView>
        <PhoneButtonView>
          <Button color="#84D269">
            <Foundation name="telephone" size={22} color="white" />
          </Button>
        </PhoneButtonView>
      </PatientButtons>
    </PatientDetails>

    <PatientAppointments>
      <Container>
        <AppointmentCard>
          <MoreButton>
            <Ionicons name="md-more" size={24} color="rgba(0, 0, 0, 0.4)" />
          </MoreButton>
          <AppointmentCardRow>
            <Ionicons name="md-medical" size={16} color="#A3A3A3" />
            <AppointmentCardLabel>
              Зуб: <Text style={{ fontWeight: '600' }}>12</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow>
            <Foundation name="clipboard-notes" size={16} color="#A3A3A3" />
            <AppointmentCardLabel>
              Диагноз: <Text style={{ fontWeight: '600' }}>пульпит</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow
            style={{ marginTop: 15, justifyContent: 'space-between' }}
          >
            <Badge style={{ width: 155 }} active>
              11.10.2019 - 15:40
            </Badge>
            <Badge color="green">1500 Р</Badge>
          </AppointmentCardRow>
        </AppointmentCard>
      </Container>
    </PatientAppointments>
  </View>
);

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 32px;
  width: 32px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCard = styled.View`
  shadow-color: gray;
  elevation: 0.5;
  shadow-opacity: 0.4;
  shadow-radius: 10;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
`;

const Container = styled.View`
  padding: 25px;
  flex: 1;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
`;

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;
`;

const FormulaButtonView = styled.View`
  flex: 1;
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const PatientButtons = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullname = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

PatientScreen.navigationOptions = {
  title: 'Карта пациента',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
};

export default PatientScreen;
