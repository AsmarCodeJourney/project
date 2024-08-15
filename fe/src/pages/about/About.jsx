import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";
import { Link } from "react-router-dom";
import image1 from "../../assets/WhatsApp Image 2024-06-18 at 11.17.33_a9edefcf.jpg";
import image2 from "../../assets/WhatsApp Image 2024-06-18 at 11.17.27_ec4738c4.jpg";
import image3 from "../../assets/WhatsApp Image 2024-07-08 at 19.18.48_385cf22a.jpg";
import image4 from "../../assets/WhatsApp Image 2024-07-08 at 19.18.49_6254aaa0.jpg";
import { Helmet } from "react-helmet-async";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="aboutPage">
      <Helmet>
        <title>Paw&Co/Haqqımızda </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="about"></section>

      <section className="aboutSecond">
        <div className="aboutHero_">
          <div className="aboutHeroText">
            <h1 className="aboutHeroHeading">Biz Kimik?</h1>
            <p className="aboutHeroTexts">
              <Link to={"/"} className="aboutPet">
                Paw&Co
              </Link>
              , 2024-dən bəri müxtəlif növ ev heyvanlarını sevənlərə təqdim edən
              bir müəssisədir. Təcrübəli və heyvansevər komandamızla birlikdə
              müştərilərimizə ən uyğun ev heyvanlarını seçmələrində kömək
              edirik. Hər bir heyvanın xüsusi qayğı və diqqət tələb etdiyini
              bildiyimiz üçün, onları ən yaxşı şəraitdə böyüdür və yeni
              ailələrinə hazırlayırıq.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutSuggest">
        <div className="suggestContainer">
          <div class="cardsg">
            <div class="content">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <img
                className="aboutSecondImg"
                src="https://c4.wallpaperflare.com/wallpaper/485/533/156/abstracto-carro-cerdito-cerveza-wallpaper-preview.jpg"
                alt="image"
              />
            </div>
          </div>

          <div className="suggestText">
            <h1 className="suggestHeading">Nələr Təklif Edirik?</h1>
            <div>
              <p className="suggestTexts">
                Çeşidli Ev Heyvanları: İtlər, pişiklər, quşlar, gəmiricilər,
                balıqlar və digər ev heyvanları geniş çeşidimizdə mövcuddur.
              </p>
              <p className="suggestTexts">
                Sağlamlıq və Qulluq: Ev heyvanlarımızın hər biri peşəkar
                baytarlar tərəfindən müntəzəm yoxlamalardan keçirilir və
                sağlamlıqları təmin edilir.
              </p>
              <p className="suggestTexts">
                Məsləhət və Dəstək: Hər növ ev heyvanının baxımı və tərbiyəsi
                ilə bağlı müştərilərimizə məsləhət və dəstək veririk.
              </p>
              <p className="suggestTexts">
                Yemək və Aksesuarlar: Ev heyvanlarınızın ehtiyac duyduğu bütün
                qida, oyuncaq və aksessuarları da mağazamızda tapa bilərsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutCom">
        <div className="aboutComContainer">
          <h1 className="aboutHeader">Yaradıcımız və Komandamız</h1>
          <div class="card1">
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={image1}
              alt="CEO"
            />
            <strong style={{ fontSize: "20px", letterSpacing: "1px" }}>
              Əsmər Mirzəyeva
            </strong>
            <p style={{ color: "red", letterSpacing: "1px" }}>
              Yaradıcımız və CEO.
            </p>
            <div class="card1__content">
              <p class="card1__title">Əsmər Mirzəyeva</p>
              <p class="card1__description">
                Əsmər, Paw&Co-nun yaradıcısı və baş icraçı direktoru olaraq, 5
                ildən artıq təcrübəsi ilə heyvanların qidalanması və baxımı
                sahəsində mütəxəssisdir. Onun rəhbərliyi altında mağazamız
                sürətlə inkişaf edib və heyvansevərlərin etibarını qazanıb.
              </p>
            </div>
          </div>

          <div className="aboutComCards">
            <div style={{ height: "200px", width: "200px" }} class="cardab red">
              <img src={image2} alt="img" />
              <p class="tip">Emil Hacızadə</p>
              <p class="second-text"> Kuryer</p>
            </div>
            <div
              style={{ height: "200px", width: "200px" }}
              class="cardab blue"
            >
              <img src={image3} alt="img" />
              <p class="tip">Emin Soltanov</p>
              <p class="second-text">Kuryer</p>
            </div>
            <div
              style={{ height: "200px", width: "200px" }}
              class="cardab green"
            >
              <img src={image4} alt="img" />
              <p class="tip">Əsəd Niyazov</p>
              <p class="second-text">Kuryer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutValues">
        <div className="aboutValuesContainer">
          <h2 className="aboutValuesHeading">Dəyərlərimiz</h2>
          <div className="aboutValuesBox">
            <label className="containerCheck">
              <input type="checkbox" checked="checked" />
              <div className="checkmark"></div>
            </label>
            <p>
              Keyfiyyət: Biz, yalnız tanınmış markaların və
              sertifikatlaşdırılmış məhsulların satışını həyata keçiririk.
              Məhsullarımızın hər biri yüksək keyfiyyət standartlarına cavab
              verir.
            </p>
          </div>

          <div className="aboutValuesBox">
            <label className="containerCheck">
              <input type="checkbox" checked="checked" />
              <div className="checkmark"></div>
            </label>
            <p>
              Müştəri Məmnuniyyəti: Müştərilərimizin məmnuniyyəti bizim üçün çox
              önəmlidir. Bunun üçün peşəkar komandamız hər zaman
              xidmətinizdədir.
            </p>
          </div>

          <div className="aboutValuesBox">
            <label className="containerCheck">
              <input type="checkbox" checked="checked" />
              <div className="checkmark"></div>
            </label>
            <p>
              Etibarlılıq: Müştərilərimizə etibarlı və dürüst xidmət göstərmək
              bizim əsas prinsiplərimizdən biridir. Sizə lazım olan məlumatları
              dəqiq və operativ şəkildə təqdim edirik.
            </p>
          </div>
          <div className="aboutValuesBox">
            <label className="containerCheck">
              <input type="checkbox" checked="checked" />
              <div className="checkmark"></div>
            </label>
            <p>
              Sevgi və Qayğı: Ev heyvanlarınıza olan sevginizi və qayğınızı
              paylaşırıq. Onların sağlamlığı və rifahı üçün ən yaxşısını təmin
              etmək üçün çalışırıq.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutDelivery">
        <div className="aboutDeliveryContainer">
          <h3 className="aboutDeliveryHeading">Xidmətlərimiz</h3>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            className="aboutDeliverySlider"
            responsive={responsive}
          >
            <div className="aboutDeliveryBox">
              <strong>Çatdırılma Xidməti</strong>
              <p>
                {" "}
                Bakı və ətraf bölgələrə sürətli və etibarlı çatdırılma
                xidmətimiz mövcuddur.
              </p>
            </div>
            <div className="aboutDeliveryBox">
              <strong>Məsləhət Xidməti</strong>
              <p>
                {" "}
                Heyvanlarınızın qidalanması, sağlamlığı və davranışı ilə bağlı
                suallarınıza peşəkar məsləhətlər veririk.
              </p>
            </div>
            <div className="aboutDeliveryBox">
              <strong>Geniş Məhsul Çeşidi</strong>
              <p>
                {" "}
                Qida, aksessuar, sağlamlıq məhsulları, oyuncaq və digər
                məhsullarla dolu geniş kataloqumuzdan istədiyiniz hər şeyi
                tapacaqsınız.
              </p>
            </div>
            <div className="aboutDeliveryBox">
              <strong>Geniş Məhsul Çeşidi</strong>
              <p>
                {" "}
                Qida, aksessuar, sağlamlıq məhsulları, oyuncaq və digər
                məhsullarla dolu geniş kataloqumuzdan istədiyiniz hər şeyi
                tapacaqsınız.
              </p>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default About;
