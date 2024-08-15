import React, { useEffect, useState } from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/products/" + id);
      const data = await res.json();
      setDetail(data);
    }
    getData();
    return () => {};
  }, []);

  return (
    <div className="detail">
      <Helmet>
        <title>Paw&Co/Detail </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>{detail.name} haqqında maraqlı faktlar</h1>
      <div className="detailContainer">
        <img src={detail.image} alt="" />
        <p>{detail.desc2}</p>
      </div>
    </div>
  );
}

export default Detail;
