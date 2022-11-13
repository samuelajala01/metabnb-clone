import Footer from "./Footer";
import NavBar from "./NavBar";
import ProductItem from "./ProductItem";
import Image2 from "../assets/Images/img-2.jpg";
import Image3 from "../assets/Images/img-3.jpg";
import Image4 from "../assets/Images/img-4.jpg";
import Image6 from "../assets/Images/img-6.jpg";
import Image8 from "../assets/Images/img-8.jpg";
import PlacesNavBar from "./PlacesNavBar";

const PlaceToStay = () => {
  const productimages = [
    { src: Image2, name: "House 2" },
    { src: Image3, name: "House 3" },
    { src: Image4, name: "House 4" },
    { src: Image6, name: "House 6" },
    { src: Image8, name: "House 8" },
    { src: Image3, name: "House 9" },
    { src: Image4, name: "House 10" },
    { src: Image2, name: "House 11" },
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
