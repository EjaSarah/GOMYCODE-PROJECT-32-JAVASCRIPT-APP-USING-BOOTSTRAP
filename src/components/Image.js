import React from "react";
import product from "../product";

const ProductImage = () => (
  <img src={product.imageUrl} alt={product.name} className="img-fluid" />
);

export default ProductImage;
