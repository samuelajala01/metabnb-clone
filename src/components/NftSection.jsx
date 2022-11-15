import NftsImg from "../assets/Images/nfts-img.jpg";

const NftSection = () => {
  return (
    <section className="nft-section">
      <div className="nft-text">
        <h3 className="nft-text-header">Metabnb NFTs</h3>
        <p className="nft-description">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads fo our exclusive services.
        </p>
        <button className="nft-btn">Learn more</button>
      </div>
      <div className="nft-img-container">
        <img className="nfts-img" src={NftsImg} />
      </div>
    </section>
  );
};

export default NftSection;
