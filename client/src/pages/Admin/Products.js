import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (

    <div className="dashboard-container">

      <AdminMenu />

      <div className="create-category create-category2">
        <div>
          <h1 className="text-center">All Products List</h1>
          <div className="product-box">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/seller/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width={"100%"}
                    height={"auto"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
};

export default Products;