import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketProvider";
import "./basket.scss";
import { Helmet } from "react-helmet-async";

function Basket() {
  const { basket, addBasket, removeBasket, decreaseBasket, getTotal } =
    useContext(BasketContext);
  return (
    <div className="basket">
      <Helmet>
        <title>Paw&Co/Basket </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="total">{getTotal()} AZN</div>
      <div className="basketMap">
        {basket.map((x) => (
          <div key={x._id} className="productsBox">
            <img
              style={{ width: "100%", minHeight: "200px" }}
              src={x.image}
              alt="img"
            />
            <h3>{x.name}</h3>
            <p>{x.description}</p>
            <h2>{x.price} AZN</h2>
            <button onClick={() => removeBasket(x)} className="productsBtn">
              Səbətdən sil
            </button>
            <div className="basketDec">
              <button className="basketInc" onClick={() => decreaseBasket(x)}>
                -
              </button>
              <p style={{ fontSize: "20px" }}>{x.count}</p>
              <button className="basketInc" onClick={() => addBasket(x)}>
                +{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
