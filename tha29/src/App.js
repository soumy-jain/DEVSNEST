  
import React from 'react';
import './App.css';
import { Container, Card } from '@material-ui/core';
import Input from './Input';
import Report from './Report';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Card elevation={7} className="form">
          <Input />
          <Report />
        </Card>
      </Container>
    </div>
  );
}


export default App; 