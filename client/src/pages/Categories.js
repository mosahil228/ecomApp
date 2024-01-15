import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const Categories = () => {
  const categories = useCategory();
  return (

    <div className="home-container">
      <div className="categories-div">
        {categories.map((c) => (
          <Link to={`/category/${c.slug}`} key={c._id} className="btn btn-primary">
            <div className="categories-box" >
                {c.name}
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
};

export default Categories;