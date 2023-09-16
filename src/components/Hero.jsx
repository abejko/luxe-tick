import Search from "./Search";
import heroImage from "../assets/heroImage2.png";

function Hero() {
  return (
    <section className="hero">
      <div className="secContainer container ">
        <div className="heroText">
          <h1 className="heroTitle">Looking for the Perfect Timepiece?</h1>
          <p>
            Discover a world of luxury and precision with our exquisite
            collection of watches. Whether you're a connoisseur of horology or
            seeking a timeless gift, our extensive range caters to all tastes
            and preferences.
          </p>
        </div>

        <div className="heroImage">
          <img src={heroImage} alt="Home image" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Hero;
