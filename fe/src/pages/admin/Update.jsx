import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./admin.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Update() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    async function getDataById() {
      const res = await fetch("http://localhost:3000/products/" + id);
      const data = await res.json();
      setDatas(data);
    }
    getDataById();
  }, []);

  async function updateData(values) {
    const res = await fetch("http://localhost:3000/products/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(values),
    });

    const data = await res.json();
    return data;
  }
  return (
    <div className="update">
      <Helmet>
        <title>Paw&Co/Update </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {datas && (
        <Formik
          initialValues={{
            categoryId: datas.categoryId,
            image: datas.image,
            name: datas.name,
            price: datas.price,
            description: datas.description,
          }}
          validationSchema={Yup.object({
            categoryId:
              Yup.string()
              .required("Required"),
            name: Yup.string()
            .required("Required"),
            image:
              Yup.string()
              .required("Required"),
            description:
              Yup.string()
              .required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={(values) => {
            updateData(values).then(() => {
              navigate("/adminLayout");
            });
          }}
        >
          <Form>
            <label htmlFor="categoryId">CategoryId</label>
            <br />
            <Field name="categoryId" type="text" className="addField" />
            <br />
            <ErrorMessage name="categoryId" />

            <label htmlFor="name">Məhsulun adı</label>
            <br />
            <Field name="name" type="text" className="addField" />
            <br />
            <ErrorMessage name="name" />

            <label htmlFor="image">Məhsulun şəkli</label>
            <br />
            <Field name="image" type="text" className="addField" />
            <br />
            <ErrorMessage name="image" />

            <label htmlFor="description">Məhsul haqqında</label>
            <br />
            <Field name="description" type="text" className="addField" />
            <br />
            <ErrorMessage name="description" />

            <label htmlFor="price">Qiymət</label>
            <br />
            <Field name="price" type="number" className="addField" />
            <br />
            <ErrorMessage name="price" />

            <button className="addBtn" type="submit">
              Update
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
}

export default Update;
