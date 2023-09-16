import TrendingWatchesCard from "./TrendingWatchesCard";
import { trendingWatchesData } from "../utils/Constants";
import { useSelector } from "react-redux";
import { useState } from "react";

function Trending() {
  const { brandSearchTerm, searchByPrice, sortBy } = useSelector(
    (state) => state.search
  );

  // Filter and sort the watches
  const filteredAndSortedWatches = trendingWatchesData
    .filter((watch) => {
      // Filter by title
      const titleMatch = brandSearchTerm
        ? watch.title.toUpperCase().includes(brandSearchTerm.toUpperCase())
        : true;

      // pricer in range range logic
      const priceInRange = (price, selectedRange) => {
        const [min, max] = selectedRange.split("-").map(Number);
        return price >= min && price <= max;
      };

      // Filter by price
      const priceMatch = searchByPrice
        ? priceInRange(watch.price, searchByPrice)
        : true;

      return titleMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "lowest") {
        return a.price - b.price;
      } else if (sortBy === "highest") {
        return b.price - a.price;
      }
      return 0;
    });

  const [initialDisplay] = useState(true);

  return (
    <section className="trending">
      <div className="setContainer container ">
        <div className="secHeading">
          <h3 className="secTitle ">Explore Our Watches</h3>
        </div>

        {filteredAndSortedWatches.length === 0 && (
          <div className="errorMessage">
            No items match the search criteria.
          </div>
        )}

        <div className="watchContainer grid">
          {filteredAndSortedWatches.map((watch) => (
            <TrendingWatchesCard
              key={watch.id}
              id={watch.id}
              type={watch.type}
              title={watch.title}
              image={watch.image}
              price={watch.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
