// src/components/Name.js
import React from "react";
import { productData } from "../product";

function Name() {
  return <h2>{productData.name}</h2>;
}

export default Name;
