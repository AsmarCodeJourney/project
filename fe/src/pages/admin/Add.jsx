import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./admin.scss";
import { Helmet } from "react-helmet-async";
function Add() {
  async function addProduct(values) {
    const res = await fetch("http://localhost:3000/products/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    console.log(data);
    return data;
  }
  return (
    <div className="add">
      <Helmet>
        <title>Paw&Co/Add </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Formik
        initialValues={{
          categoryId: "",
          image: "",
          name: "",
          price: "",
          description: "",
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
        onSubmit={(values, { resetForm }) => {
          addProduct(values);
          resetForm();
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
            Əlavə et
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
