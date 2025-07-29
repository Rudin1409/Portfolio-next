import './scrolling-banner.css';

const bannerText = "ABOUT ME";

export function ScrollingBanner() {
  const repeatedText = Array(20).fill(bannerText);

  return (
    <div className="scrolling-banner-container">
      <div className="scrolling-banner scroll-left">
        {repeatedText.map((text, index) => (
          <span key={index} className="scrolling-banner-text">
            {text}
          </span>
        ))}
      </div>
      <div className="scrolling-banner scroll-right">
        {repeatedText.map((text, index) => (
          <span key={index} className="scrolling-banner-text">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
