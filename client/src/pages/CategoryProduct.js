import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import spin from "../images/spinner.gif"
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (

      <div className="container mt-3">
        <div className="home-container">
        <div className="home-right home-right2">
          <h1 className="heading-filter">Category - {category?.name}</h1>
          <h6 style={{fontSize:"14px",marginBottom:"20px"}}>{products?.length < 1
              ? <img src={spin} alt="spinner" width={"35px"}  height={"auto"}/>
              : `Found (${products?.length})`}</h6>
          
          <div className="product-section">
            {products?.map((p) => (
              <div className="product-card">
                <div className="image-box" onClick={() => navigate(`/product/${p.slug}`)}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}...</p>
                  <div className="add-info">
                    <p className="card-text"> $ {p.price}</p>
                    <button>ADD TO CART</button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default CategoryProduct;