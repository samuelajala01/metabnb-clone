import Footer from "./Footer";
import NavBar from "./NavBar";
import ProductItem from "./ProductItem";
import Image1 from "../assets/Images/img-1.jpg";
import Image2 from "../assets/Images/img-2.jpg";
import Image3 from "../assets/Images/img-3.jpg";
import Image4 from "../assets/Images/img-4.jpg";
import Image5 from "../assets/Images/img-5.jpg";
import Image6 from "../assets/Images/img-6.jpg";
import Image7 from "../assets/Images/img-7.jpg";
import Image8 from "../assets/Images/img-8.jpg";
import Image11 from "../assets/Images/img-11.jpg";
import Image12 from "../assets/Images/img-12.jpg";
import Image13 from "../assets/Images/img-13.jpg";
import Image14 from "../assets/Images/img-14.jpg";
import Image15 from "../assets/Images/img-15.jpg";
import Image16 from "../assets/Images/img-16.jpg";
import PlacesNavBar from "./PlacesNavBar";

const PlaceToStay = () => {
  const productimages = [
    { src: Image1, name: "House 2" },
    { src: Image2, name: "House 2" },
    { src: Image3, name: "House 3" },
    { src: Image4, name: "House 4" },
    { src: Image5, name: "House 4" },
    { src: Image7, name: "House 4" },
    { src: Image6, name: "House 6" },
    { src: Image8, name: "House 8" },
    { src: Image11, name: "House 9" },
    { src: Image12, name: "House 10" },
    { src: Image13, name: "House 11" },
    { src: Image14, name: "House 11" },
    { src: Image15, name: "House 11" },
    { src: Image16, name: "House 11" },
    { src: Image12, name: "House 10" },
    { src: Image2, name: "House 2" },
  ];

  return (
    <>
      <section className="places-section">
        <PlacesNavBar />
        <div className="product-container">
          {productimages.map((img) => {
            return <ProductItem name={img.name} src={img.src} />;
          })}
        </div>
      </section>
    </>
  );
};

export default PlaceToStay;
