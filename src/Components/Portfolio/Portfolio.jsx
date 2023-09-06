import './Portfolio.css';
import Portfolio1 from '../../assets/images/portfolio1.png';
import Portfolio2 from '../../assets/images/portfolio2.png';
import Portfolio3 from '../../assets/images/portfolio3.png';
import Portfolio4 from '../../assets/images/portfolio4.png';

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <div className="portfolio-wrapper">
            <div className="heading-text-container">
                <h2 className="heading-v2 midBlueText">Our Impressive Portfolio</h2>
                <p className="text-v1 midBlueText">We believe scaling startups require a radically different kind of agency</p>
            </div>
            <div className="portfolio-grid-container">
                <div className="portfolio-card">
                    <img src={Portfolio1} alt="portfolio" />
                    <h3 className="portfolio-title midBlueText">Website Design</h3>
                </div>
                <div className="portfolio-card">
                    <img src={Portfolio2} alt="portfolio" />
                    <h3 className="portfolio-title midBlueText">Dashboard Design</h3>
                </div>
                <div className="portfolio-card">
                    <img src={Portfolio3} alt="portfolio" />
                    <h3 className="portfolio-title midBlueText">Gallery Item</h3>
                </div>
                <div className="portfolio-card">
                    <img src={Portfolio4} alt="portfolio" />
                    <h3 className="portfolio-title midBlueText">Mock Up Design</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
