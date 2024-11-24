import React from "react";
import { ProductTypes } from "./ProductTypes";
import { StyledProduct } from "./StyledProduct";
const ProductCard: React.FC<{ product: ProductTypes }> = ({ product }) => (
  <StyledProduct
  >
    <div className="product-card">
      <div className="product-card-img">
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
      </div>
      
      <div className="product-info">
        <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
        <p style={{ color: "green", fontWeight: "bold", margin:0 }}>${product.price}</p>
      </div>
    </div>
   
  </StyledProduct>
);

export default ProductCard;
