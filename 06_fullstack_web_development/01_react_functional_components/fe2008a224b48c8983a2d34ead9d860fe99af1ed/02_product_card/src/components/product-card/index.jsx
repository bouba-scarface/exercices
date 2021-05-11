import React from "react";
import CardHeader from "./header";

const ProductCard = (product) => {
  console.log(product.product.platforms.map());
  return (
    <>
      <CardHeader name={product.name} />
    </>
  );
};

export default ProductCard;
