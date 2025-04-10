import React from "react";
import style from "./ProductCard.module.css";
import { Link } from "react-router";
import axios from "axios";

const ProductCard = ({ data = null, onDelete = () => {} }) => {
  const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);

    if (res.status >= 200 && res.status < 300) {
      onDelete();
    }
  };
  return (
    data && (
      <div className={style.cardBG}>
        <img src={data.image} />
        <p className={style.name}>{data.name}</p>
        <p className={style.price}>{data.price}$</p>
        <Link to={"#"}>Show</Link>
        <Link to={`products/edit/${data._id}`}>Edit</Link>
        <button onClick={() => deleteProduct(data._id)}>delete</button>
      </div>
    )
  );
};

export default ProductCard;
