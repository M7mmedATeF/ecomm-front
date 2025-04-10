import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

const AddProduct = ({ editMode }) => {
  const { id } = useParams();
  const nav = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const getProductData = async () => {
    if (!id) return;
    const res = await axios.get(`http://localhost:3000/products/${id}`);

    if (res.status >= 200 && res.status < 300) {
      reset({
        name: res.data.name,
        category: res.data.category,
        desciption: res.data.desciption,
        image: res.data.image,
        price: res.data.price,
      });
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const addProduct = async (formdata) => {
    formdata.price = Number(formdata.price);

    const res = await axios.post("http://localhost:3000/products", formdata);

    if (res.status >= 200 && res.status < 300) {
      nav("/");
    }
  };

  /**
   * {
   *  name: "",
   *  desc: ""
   * }
   */

  const updateProduct = async (formdata) => {
    const UpdateValues = {};
    Object.keys(formdata).forEach((key) => {
      // ['name', 'desc', 'price']
      const value = formdata[key];
      if (value && value != "") {
        UpdateValues[key] = value;
      }
    });

    const res = await axios.patch(
      `http://localhost:3000/products/${id}`,
      UpdateValues
    );

    if (res.status >= 200 && res.status < 300) {
      nav("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(editMode ? updateProduct : addProduct)}>
        <label>
          <p>Name</p>
          <input type="text" {...register("name")} />
        </label>

        <label>
          <p>Price</p>
          <input type="number" {...register("price")} />
        </label>

        <label>
          <p>desciption</p>
          <input type="text" {...register("desciption")} />
        </label>

        <label>
          <p>category</p>
          <input type="text" {...register("category")} />
        </label>

        <label>
          <p>image</p>
          <input type="url" {...register("image")} />
        </label>

        <div>
          <button>{editMode ? "Submit" : "Add Product"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
