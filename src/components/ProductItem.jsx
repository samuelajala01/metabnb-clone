const ProductItem = (props) => {
  return (
    <div className="product-item">
      <div className="product-img-container">
        <img src={props.src} height="250" width="250" />
      </div>
      <div className="product-description">
        <p>
          <span>Desert King</span>
          <span>1MBT per night</span>
        </p>
        <p>
          <span>234.5km away</span>
          <span>available for 2 weeks stay</span>
        </p>
        <span>&&&&&</span>
      </div>
    </div>
  );
};

export default ProductItem;
