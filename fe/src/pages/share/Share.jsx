import React, { useEffect, useState } from "react";
import "./share.scss";
import { Helmet } from "react-helmet-async";
function Share() {
  const [datas, setDatas] = useState([]);
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getShare() {
      const res = await fetch("http://localhost:3000/upload/");
      const data = await res.json();
      setDatas(data);
    }
    getShare();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", userName);

    try {
      const res = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Success:", data);
      await getShare();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="share">
      <Helmet>
        <title>Paw&Co/Əyləncə </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="shareContainer">
        <div className="shareHeader">
          <h1 className="shareHeading">
            Səndə Öz Sevimli Dostunu Bizimlə Paylaş
          </h1>
          <div className="shareHeaderImg">
            <img
              style={{ width: "100%" }}
              src="https://content.presentermedia.com/files/clipart/00028000/28698/happy_emoji_face_800_wht.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="container">
          <div className="glass">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://img.freepik.com/premium-photo/adorable-baby-chicken-celebrating-special-occasions0_167713-2849.jpg"
              alt=""
            />
            <svg
              viewBox="0 0 496 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          <div className="glass">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://d.newsweek.com/en/full/2018584/national-pets-day.jpg?w=1600&h=1200&q=88&f=d587914b6002b057f8ef5ffdbb91daed"
              alt=""
            />
            <svg
              viewBox="0 0 640 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          <div className="glass">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://wallpapers.com/images/hd/cute-rabbit-pictures-06jp0ob8e5y06xje.jpg"
              alt=""
            />
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>

        <div className="shareImagesContainer">
          {datas.map((x) => (
            <div key={x._id} class="card">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "17px" }}
                src={x.image}
                alt=""
              />

              <button class="card-button">{x.name}</button>
            </div>
          ))}
          <div class="card">
            <div class="card-details">
              <input style={{width:"180px"}}
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleFileChange}
              />
              <input
                type="text"
                placeholder="Adınızı daxil edin"
                value={userName}
                onChange={handleNameChange}
              />
            </div>
            <button
              style={{ cursor: "pointer" }}
              className="card-button"
              onClick={handleSubmit}
            >
              Göndər
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
