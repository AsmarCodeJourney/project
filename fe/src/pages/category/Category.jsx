import React, { useContext, useEffect, useState } from "react";
import "./category.scss";
import { BasketContext } from "../../context/BasketProvider";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistProvider";
import { Helmet } from "react-helmet-async";
function Category() {
  const [datas, setDatas] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { categoryId } = useParams();
  const { addWishlist, isExist } = useContext(WishlistContext);
  useEffect(() => {
    async function fetchCategoryData(catId) {
      const res = await fetch(
        `http://localhost:3000/productbycategory/${catId}`
      );
      const data = await res.json();
      setDatas(data);
    }
    fetchCategoryData(categoryId);
    return () => {};
  }, []);

  return (
    <div className="category">
      <Helmet>
        <title>Paw&Co/Category </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {datas.map((x) => (
        <div key={x._id} className="productsBox">
          {isExist(x) ? (
            <i
              id="productWish"
              onClick={() => addWishlist(x)}
              className="fa-solid fa-heart"
            ></i>
          ) : (
            <i
              id="productWish"
              onClick={() => addWishlist(x)}
              className="fa-regular fa-heart"
            ></i>
          )}
          <img
            style={{ width: "100%", minHeight: "200px" }}
            src={x.image}
            alt="img"
          />
          <h3>{x.name}</h3>
          <p>{x.description}</p>
          <h2>{x.price} AZN</h2>
          <button onClick={() => addBasket(x)} className="productsBtn">
            Səbətə at
          </button>
        </div>
      ))}
    </div>
  );
}

export default Category;
