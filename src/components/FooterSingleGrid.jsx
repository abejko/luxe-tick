function FooterSingleGrid({ footerTitle, footerLi }) {
  return (
    <div className="singleGrid">
      <span className="footerTitle">{footerTitle}</span>
      <ul className="footerUI grid">
        {footerLi.map((item, index) => (
          <li key={index} className="footerLi">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSingleGrid;
