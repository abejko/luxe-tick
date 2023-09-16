function TopBrandCard({ brandImage }) {
  return (
    <div className="singleBrand flex">
      <div className="imgDiv flex">
        <img src={brandImage} alt="" className="img" />
      </div>
      {/* <span className="info">
        <h4 className="name">{watchName}</h4>
        <p>{watchPrice}</p>
      </span> */}
    </div>
  );
}

export default TopBrandCard;
