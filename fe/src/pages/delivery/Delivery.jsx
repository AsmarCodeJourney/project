import React from "react";
import "./delivery.scss";
import { Helmet } from "react-helmet-async";

function Delivery() {
  return (
    <div className="deliveryMain">
      <Helmet>
        <title>Paw&Co/Delivery </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="deliveryContainer">
        <div className="deliveryBox">
          <div className="deliveryIcon">
            <i className="fa-solid fa-truck"></i>
          </div>
          <div className="deliveryRight">
            <h2 className="deliveryRightHeader">Pulsuz çatdırılma</h2>
            <strong>Çatdırılma şərtləri:</strong>

            <p>
              {" "}
              • 50 AZN-dən yuxarı sifarişlər üçün çatdırılma pulsuzdur. Bu
              məbləğdən aşağı sifarişin çatdırılması, sifarişin qiyməti daxil
              olmaqla, 50 AZN təşkil edir.
            </p>
            <p>
              {" "}
              • Çatdırılma Bakı ərazisi, Bakı kəndlərinə (Qobustan istisna
              olmaqla), Abşeron, Xırdalan və Lökbatana qədər həyata keçirilir.
            </p>
            <p>Çatdırılma həftənin hər günü həyata keçirilir.</p>
            <p>• Saat 17:00-dək edilən sifarişlər həmin gün çatdırılır.</p>
            <strong>Ödəmə üsulları:</strong>
            <p>
              • Kuryerə nağd şəkildə, bank kartı və ya taksit kartı ilə həyata
              keçirilir.
            </p>
            <p>• Saytda bank kartı və ya taksit kartı ilə.</p>
          </div>
        </div>
        <div className="deliveryBox">
          <div className="deliveryRight">
            <h2 className="deliveryRightHeader">Onlayn ödəniş</h2>
            <p className="deliveryBox2">
              Ödəniş üçün <strong>Visa</strong>, <strong>Mastercard</strong> və{" "}
              <strong>BirKart</strong> 2 aydan 3 aya qədər taksit kartları qəbul
              edilir. Pet&Co saytı MasterCard Secure Code və Visa Secure
              texnologiyasını dəstəkləyir. Bu proqramlar internetdə alış-veriş
              edərkən sizi qorumaq üçün 3D-Secure texnologiyasından istifadə
              edir. Onlayn ödəmələr üçün əlavə ödəniş və komissiya tutulmur.
              Minimal ödəniş məbləği 50 AZN-dir.
            </p>
          </div>
          <div className="deliveryIcon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
        </div>
        <div className="deliveryBox">
          <div className="deliveryIcon">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div className="deliveryRight">
            <h2 className="deliveryRightHeader">Onlayn dəstək</h2>
            <p className="deliveryBox2">
              Müştəri dəstəyi onlayn və <strong>222</strong> qısa nömrəsi ilə
              həyata keçirilir. Operatorlarımız hər gün saat{" "}
              <strong>10:00-dan 19:00-dək</strong> sizin xidmətinizdədirlər.
              Onlayn dəstək saytda həftənin 6 günü saat{" "}
              <strong>10:00-dan 19:00-dək</strong> fəaliyyət göstərir.Onlayn
              dəstək xidmətimizlə hər hansı bir sualınız və ya probleminiz
              olduğu zaman bizimlə asanlıqla əlaqə saxlaya bilərsiniz. Sizə
              xidmətlər haqqında məlumat verməyə, ev heyvanlarınızla və sayt
              məhsulları ilə bağlı suallarınıza cavab tapmağa kömək edəcəyik.
            </p>
          </div>
        </div>
        <div className="deliveryBox">
          <div className="deliveryRight">
            <h2 className="deliveryRightHeader">Təhlükəsiz ödəniş</h2>
            <p className="deliveryBox2">
              <strong>Pet&Co</strong> saytı MasterCard Secure Code və Visa
              Secure texnologiyasını dəstəkləyir. Bu proqramlar internetdə
              alış-veriş edərkən sizi qorumaq üçün 3D-Secure texnologiyasından
              istifadə edir. Kart məlumatlarını daxil etdikdən sonra siz bankın
              təhlükəsizlik internet səhifəsinə yönləndiriləcəksiniz.
              Alış-verişinizi təsdiqləmək üçün bank karta və ya hesaba bağlanan
              mobil telefon nömrəsinə birdəfəlik şifrə ilə SMS göndərəcək. Bu
              kodu heç kimlə paylaşmayın. Alınan kodu ödəmə səhifəsindəki xüsusi
              sahəyə daxil edin. Onlayn ödəmələr üçün əlavə ödəniş və komissiya
              tutulmur. Diqqət! Əgər bank kartınız 3D-Secure texnologiyasını
              dəstəkləmirsə, bu kartla olunan əməliyyat həyata keçməyəcəkdir.
            </p>
          </div>
          <div className="deliveryIcon">
            <i className="fa-solid fa-shield"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
