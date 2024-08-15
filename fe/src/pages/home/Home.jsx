import React, { useContext, useEffect, useState } from "react";
import "./home.scss";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/lamb-indoor-adult-club-4-paws-suhoy-korm-dlya-koshekat-800x800-1-700x700-removebg-preview.png";
import imageA from "../../assets/WhatsApp Image 2024-06-30 at 15.00.53_b8e28449.jpg";
import imageN from "../../assets/IMG_20240614_013803_435.jpg";
import video from "../../assets/WhatsApp Video 2024-08-15 at 11.39.10_f5f73216.mp4";
import imageE from "../../assets/WhatsApp Image 2024-06-30 at 15.08.38_e0db675f.jpg";
import { Helmet } from "react-helmet-async";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BasketContext } from "../../context/BasketProvider";
import { WishlistContext } from "../../context/WishlistProvider";

function Home() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [food, setFood] = useState([]);
  const [acs, setAcs] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addWishlist, isExist } = useContext(WishlistContext);
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 17,
    minutes: 47,
    seconds: 58,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const remainingSeconds =
          prevCountdown.days * 24 * 60 * 60 +
          prevCountdown.hours * 60 * 60 +
          prevCountdown.minutes * 60 +
          prevCountdown.seconds;

        const updatedSeconds = remainingSeconds - 1;

        const days = Math.floor(updatedSeconds / (24 * 60 * 60));
        const hours = Math.floor((updatedSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((updatedSeconds % (60 * 60)) / 60);
        const seconds = updatedSeconds % 60;

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    getAllDatas();
    getFoodByCategoryId();
    getFoodByCategoryId2();

    return () => clearInterval(interval);
    {
    }
  }, []);

  async function getAllDatas() {
    const res = await fetch("http://localhost:3000/products/");
    const data = await res.json();
    setDatas(data);
  }
  async function getFoodByCategoryId() {
    const res = await fetch(
      "http://localhost:3000/fooder/668bb4db3a60198574421307"
    );
    const data = await res.json();
    setFood(data);
  }
  async function getFoodByCategoryId2() {
    const res = await fetch(
      "http://localhost:3000/fooder/668bb355710a5cb365bf2b37"
    );
    const data = await res.json();
    setAcs(data);
  }
  async function getCategory(categoryId) {
    const res = await fetch(
      `http://localhost:3000/productbycategory/${categoryId}`
    );
    const data = await res.json();
    setDatas(data);
    console.log(data);
    navigate(`/category/${categoryId}`);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Helmet>
        <title>Paw&Co/Ana Səhifə</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="homeHero">
        <div className="home">
          <video
            style={{ width: "100%" }}
            src={video}
            autoPlay
            loop
            muted
            type="video/mp4"
          ></video>
          <img
            className="homeImg"
            src="https://arazmarket.az/site/templates/img/icons/bg-video-end.svg"
            alt=""
          />
        </div>
      </section>

      <section className="homeSec">
        <div className="secContainer">
          <Link to={"/delivery"} className="secBox">
            <div className="secİcon">
              <i className="fa-solid fa-truck"></i>
            </div>

            <p>Pulsuz Çatdırılma</p>
          </Link>
          <Link to={"/delivery"} className="secBox">
            <div className="secİcon">
              <i className="fa-regular fa-credit-card"></i>
            </div>

            <p>Onlayn Ödəniş</p>
          </Link>
          <Link to={"/delivery"} className="secBox">
            <div className="secİcon">
              <i className="fa-solid fa-headset"></i>
            </div>

            <p>Onlayn Dəstək</p>
          </Link>
          <Link to={"/delivery"} className="secBox">
            <div className="secİcon">
              <i className="fa-solid fa-shield"></i>
            </div>
            <p>Təhlükəsiz Ödəniş</p>
          </Link>
        </div>
      </section>

      <section className="advertising">
        <Carousel
          className="advertisingContainer"
          responsive={responsive1}
          transitionDuration={1000}
          infinite={true}
          autoPlay={true}
        >
          <img
            src="https://www.petshop.co.uk/Homepage%20Banners/2024/May%202024/PS/Huntland_Homepage_Banners_Desktop.webp"
            alt=""
          />
          <img
            src="https://www.petshop.co.uk/Homepage%20Banners/2024/July%202024/PS/burgess_homepage_Desktop.webp"
            alt=""
          />
          <img
            src="https://www.petshop.co.uk/Homepage%20Banners/2024/July%202024/PS/Catit_homepage_Desktop.webp"
            alt=""
          />
          <img
            src="https://www.petshop.co.uk/Homepage%20Banners/2024/July%202024/PS/Forthglade_homepage_Desktop.webp"
            alt=""
          />
          <img
            src="https://www.petshop.co.uk/Homepage%20Banners/2024/July%202024/PS/LK_homepage_Desktop.webp"
            alt=""
          />
        </Carousel>
      </section>

      <section className="homePets">
        <div
          onClick={() => getCategory("6680713fde937df497f29aef")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://c02.purpledshub.com/uploads/sites/41/2020/10/GettyImages-1194409229-crop-4477e44.jpg?w=1029&webp=1"
            alt="img"
          />
          <p>Pişik</p>
        </div>
        <div
          onClick={() => getCategory("6680714bde937df497f29af3")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcCQ6n_20VtAotla4FW9UHQb0Kj5X7d6jGA&s"
            alt="img"
          />
          <p>Dovşan</p>
        </div>
        <div
          onClick={() => getCategory("66807146de937df497f29af1")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://t3.ftcdn.net/jpg/06/43/11/92/360_F_643119209_iLHJkoQExXcgYYQw0zYKurptxQXAAjlr.jpg"
            alt="img"
          />
          <p>It</p>
        </div>

        <div
          onClick={() => getCategory("66807151de937df497f29af5")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://cdn.animalsaustralia.org/wp-content/uploads/2021/11/23232324/chickenlove-03-individuals-900x450.jpg"
            alt="img"
          />
          <p>Toyuq</p>
        </div>
        <div
          onClick={() => getCategory("6680715ade937df497f29af7")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://c4.wallpaperflare.com/wallpaper/639/424/940/birds-bird-cute-fuzzy-wallpaper-preview.jpg"
            alt="img"
          />
          <p>Quş</p>
        </div>
        <div
          onClick={() => getCategory("66807166de937df497f29af9")}
          className="homePetsBox"
        >
          <img
            style={{ width: "100%" }}
            src="https://t3.ftcdn.net/jpg/07/14/77/86/360_F_714778647_VIlrggM9HeSE2EA9GupA0ZFTpa74npY5.jpg"
            alt="img"
          />
          <p>Balıq</p>
        </div>
      </section>

      <section className="products">
        <Carousel className="productsContainer" responsive={responsive}>
          {datas.map((x) => (
            <div key={x._id} className="productsBox">
              {isExist(x) ? (
                <i
                  id="productWish1"
                  onClick={() => addWishlist(x)}
                  className="fa-solid fa-heart"
                ></i>
              ) : (
                <i
                  id="productWish1"
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
        </Carousel>
      </section>
      <section className="discount">
        <div className="discountContainer">
          <div className="discountLeft">
            <p className="discountText">5 İyun-12 İyul</p>
            <h3 className="discountText1">HƏFTƏNİN ENDİRİMİ </h3>
            <div
              className="discount__"
              style={{ display: "flex", gap: "20px", fontSize: "40px" }}
            >
              <p>{countdown.days} days :</p>
              <p>{countdown.hours} h:</p>
              <p>{countdown.minutes} min :</p>
              <p>{countdown.seconds} sec</p>
            </div>
          </div>
          <div className="discountRight">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h2 style={{ fontSize: "30px" }}>130 AZN</h2>

              <h3 className="crossed-price">175 AZN</h3>
            </div>
            <div className="discountRight1">
              <img style={{ width: "100%" }} src={img} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="fooder">
        <h2 style={{ letterSpacing: "1px" }}> Ən çox satılan yemlər</h2>
        <div className="fooderContainer">
          <Carousel
            className="productsContainer"
            responsive={responsive}
            transitionDuration={500}
            infinite={true}
          >
            {food.map((x) => (
              <div key={x._id} className="productsBox">
                {isExist(x) ? (
                  <i
                    id="productWish2"
                    onClick={() => addWishlist(x)}
                    className="fa-solid fa-heart"
                  ></i>
                ) : (
                  <i
                    id="productWish2"
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
                  {" "}
                  Səbətə at{" "}
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="brend">
        <h1 style={{ fontSize: "20px" }}>Brendlər</h1>
        <p>Mağazamızda 50-dən çox brendin məhsulları mövcuddur</p>

        <div className="brendSlider">
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/2/rectangle-2566.png"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/61/applaws.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/65/biokats-logo.png"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/71/newproplan.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/80/newfelix.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/81/newgourmet.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/103/lapka1.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/75/18whiskas.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/104/kikikat.jpg"
              alt="img"
            />
          </div>
          <div className="brendSliderBox">
            <img
              style={{ width: "100%" }}
              src="https://biopet.az/storage/product-attributes/100/77alpenhof.jpg"
              alt="img"
            />
          </div>
        </div>
      </section>
      <section className="acs">
        <h1>Aksesuarlar</h1>
        <Carousel
          className="productsContainer"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
        >
          {acs.map((x) => (
            <div key={x._id} className="productsBox">
              {isExist(x) ? (
                <i
                  id="productWish1"
                  onClick={() => addWishlist(x)}
                  className="fa-solid fa-heart"
                ></i>
              ) : (
                <i
                  id="productWish1"
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
        </Carousel>
      </section>
      <section className="homeEnd">
        <h1 style={{ color: "white" }}>Müştəri məmnuniyyəti</h1>

        <div className="homeEndContainer">
          <div className="homeEndBox">
            <p>
              Yeni aldığım kedi maması o qədər dadlı görünür ki, demək olar ki,
              özüm dadmaq istədim. Amma pişiyim mənə baxıb 'qoy bunu mənə' dedi
              sjsjjsj
            </p>
            <div className="homeEndİmg">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                src={imageA}
                alt="img"
              />
              <h5>Aytən Əhmədova</h5>
            </div>
          </div>

          <div className="homeEndBox">
            <p>Toyuğun dadı çox qəşəy idii</p>
            <div className="homeEndİmg">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "500%",
                }}
                src={imageE}
                alt="img"
              />
              <h5>Emin Soltanov</h5>
            </div>
          </div>

          <div className="homeEndBox">
            <p>Toyuqların qiyməti çox ucuzduuu</p>
            <div className="homeEndİmg">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                src={imageN}
                alt="img"
              />
              <h5>Nərmin Nəbiyeva</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="homeEnd_">
        <h2>
          <strong style={{ color: "#258B21" }}>Paw&Co </strong> maraqlı faktlar
        </h2>
        <div className="homeEnd_Container">
          {datas.map(
            (x) =>
              !x.categoryId && (
                <div className="homeEnd_Box">
                  <div className="homeEnd_BoxLeft">
                    <img src={x.image} alt="img" />
                  </div>
                  <div className="homeEnd_BoxRight">
                    <h4>{x.name}</h4>
                    <p>{x.desc}</p>
                  </div>
                  <div style={{ display: "flex", color: "#258B21" }}>
                    <button className="homeEnd_BoxRightBtn">
                      <Link to={`/detail/${x._id}`}>
                        davamı <i className="fa-solid fa-chevron-right"></i>
                      </Link>{" "}
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
