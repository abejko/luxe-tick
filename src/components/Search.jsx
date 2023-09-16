import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  searchByBrand,
  setPriceChange,
  clearInputs,
  setSortBy,
} from "../store/slices/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const { brandSearchTerm, searchByPrice, sortBy } = useSelector(
    (state) => state.search
  );

  const handleBrandChange = (event) => {
    dispatch(searchByBrand(event.target.value));
  };

  const handlePriceChange = (event) => {
    const selectedPriceRange = event.target.value;
    dispatch(setPriceChange(selectedPriceRange));
  };

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    dispatch(setSortBy(selectedSortBy));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearInputs());
  };

  const priceRanges = [
    { label: "Any Price", min: 1, max: Infinity },
    { label: "$1 - $100", min: 1, max: 100 },
    { label: "$100 - $500", min: 100, max: 500 },
    { label: "$500 - $1000", min: 500, max: 1000 },
    { label: "Over $1000", min: 1001, max: Infinity },
  ];

  return (
    <div className="search">
      <div className="secContainer container ">
        <h3 className="title ">Find Your Perfect Watch</h3>
        <form onSubmit={handleSubmit} className="searchDiv grid">
          <input
            value={brandSearchTerm}
            type="text"
            placeholder="Brand"
            onChange={handleBrandChange}
          />
          {/* sortByPrice options */}
          <select value={searchByPrice || ""} onChange={handlePriceChange}>
            {priceRanges.map((range, index) => (
              <option key={index} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>

          {/* sortBy options */}
          <select value={sortBy || ""} onChange={handleSortChange}>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
