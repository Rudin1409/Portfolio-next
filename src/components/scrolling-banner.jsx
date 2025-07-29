import './scrolling-banner.css';

const bannerText = "ABOUT ME";

export function ScrollingBanner() {
  const repeatedText = Array(20).fill(bannerText);

  return (
    <div 
      className="scrolling-banner-container"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 25, 35, 0.9), rgba(15, 25, 35, 0.9)), radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
        backgroundSize: 'cover, 2rem 2rem',
        position: 'relative',
      }}
    >
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
