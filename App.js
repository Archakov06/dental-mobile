import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { Appointment, SectionTitle } from './components';

const DATA = [
  {
    title: '14 сентября',
    data: [
      {
        time: '15:30',
        active: true,
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar:
            'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar:
            'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar:
            'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar:
            'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
        }
      }
    ]
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar:
            'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar:
            'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar:
            'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar:
            'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
        }
      }
    ]
  }
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

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
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
