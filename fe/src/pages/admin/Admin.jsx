import React, { useEffect, useState } from "react";
import "./admin.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Admin() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getAllDatas();
    return () => {};
  }, []);
  async function getAllDatas() {
    const res = await fetch("http://localhost:3000/products/");
    const data = await res.json();
    setDatas(data);
  }

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/products/" + id, {
      method: "delete",
    });
    const data = await res.json();
    console.log(data);
    await getAllDatas();
  }

  return (
    <div className="admin">
      <Helmet>
        <title>Paw&Co/Admin </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>CategoryId</th>
            <th>Məhsulun adı</th>
            <th>Məhsul haqqında</th>
            <th>Məhsulun şəkli</th>
            <th>Məhsulun qiyməti</th>
            <th>Options </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((x) => (
            <tr key={x._id}>
              <td>{x.categoryId}</td>
              <td>{x.name}</td>
              <td>{x.description}</td>
              <td>
                <img style={{ width: "100px" }} src={x.image} alt="img" />
              </td>
              <td>{x.price} AZN</td>
              <td className="adminOption">
                <Link className="adminBtn" onClick={() => deleteProduct(x._id)}>
                  Sil
                </Link>
                <Link to={"/adminLayout/update/" + x._id} className="adminBtn">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
