import ProductItem from "./ProductItem";
import Image1 from "../assets/Images/img-1.jpg";
import Image2 from "../assets/Images/img-2.jpg";
import Image3 from "../assets/Images/img-3.jpg";
import Image4 from "../assets/Images/img-4.jpg";
import Image5 from "../assets/Images/img-5.jpg";
import Image6 from "../assets/Images/img-6.jpg";
import Image7 from "../assets/Images/img-7.jpg";
import Image8 from "../assets/Images/img-8.jpg";

const InspirationSection = () => {
  return (
    <section className="inspiration-section">
      <h2>Inspiration for your next adventure</h2>
      <div className="product-container">
        <ProductItem name="House 3" src={Image1} />
        <ProductItem name="House 4" src={Image2} />
        <ProductItem name="House 6" src={Image3} />
        <ProductItem name="House 3" src={Image4} />
        <ProductItem name="House 2" src={Image5} />
        <ProductItem name="House 4" src={Image6} />
        <ProductItem name="House 2" src={Image7} />
        <ProductItem name="House 6" src={Image8} />
      </div>
    </section>
  );
};

export default InspirationSection;
