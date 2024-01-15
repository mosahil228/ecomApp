import React from "react";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="home-container">
        <div className="home-right home-right2">
          <h1 className="heading-filter">Search Products</h1>
          <h6 style={{fontSize:"14px",marginBottom:"20px"}}>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found (${values?.results.length})`}
          </h6>
          <div className="product-section">
            {values?.results.map((p) => (
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

export default Search;