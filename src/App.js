import logo from './logo.svg';
import './App.css';

import React from "react";
import { Container, Alert } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import Image from './components/imagee';

const firstName = "Sayed"; 

function App() {
  return (
    <Container>
      <h1>Hello, {firstName ? firstName : "there"}!</h1>
      {firstName && <Image src="blob:https://www.bmw-motorrad.fr/c91cdde6-a6fd-4b96-a26b-917ce1b936f2" alt={firstName} />}
      <ProductCard />
    </Container>
  );
}

export default App;


