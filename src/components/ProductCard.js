// src/components/ProductCard.js
import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import Name from "./namee";
import Price from "./pricee";
import Description from "./descriptionn";
import Imagee from "./imagee";
import { productData } from "../product";

function ProductCard() {
  return (
    <Card>
      <Row>
        <Col sm={4}>
          <Imagee src={productData.image} alt={productData.name} />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductCard;

