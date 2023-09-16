import FooterSingleGrid from "./FooterSingleGrid";
import { footerData } from "../utils/Constants";
import { copyrightNotice } from "../utils/Constants";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* singleGrid */}
          {footerData.map((data) => (
            <FooterSingleGrid
              key={data.footerTitle}
              footerTitle={data.footerTitle}
              footerLi={data.footerLi}
            />
          ))}
        </div>

        {/* Footer lower section */}
        <div className="lowerSection grid">
          <p>
            Watches sourced from
            <a
              href="https://www.watchshop.com/watches/mens.plp"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.watchshop.com/watches/mens.plp
            </a>
            .
            <br />
            {copyrightNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
