import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export default function App() {
  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  )
}
