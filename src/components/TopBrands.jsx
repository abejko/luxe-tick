import TopBrandCard from "./TopBrandCard";
import { topBrandsData } from "../utils/Constants";

function TopBrands() {
  return (
    <section className="topBrands">
      <div className="secContainer container">
        <div className="topBrandContainer flex">
          {topBrandsData.map((brand, index) => (
            <TopBrandCard key={index} brandImage={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBrands;
