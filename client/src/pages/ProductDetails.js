import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>


      <div className="detail-container">
        <div className="p-image">
          <h1 className="heading-filter">Product Details</h1>
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="p-desc">

          <h3> {product.name}</h3>
          <h5> {product?.category?.name}</h5>
          <h6>{product.description}</h6>
          <h3>$ {product.price}</h3>

          <button onClick={() => {
            setCart([...cart, product]);
            localStorage.setItem('cart', JSON.stringify([...cart, product]));
            toast.success("Item added to cart")

          }

          }>ADD TO CART</button>
        </div>
      </div>

      <div className="home-container">
        <div className="home-right home-right2">
          <h1 className="heading-filter">Similar Products</h1>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="product-section">
            {relatedProducts?.map((p) => (
              <div className="product-card" key={p._id}>
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

    </>

  );
};

export default ProductDetails;