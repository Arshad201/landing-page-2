import "./CompanyFeature.css";
import cardImg1 from '../../assets/icons/growth.svg';
import cardImg2 from '../../assets/icons/strategy.svg';
import cardImg3 from '../../assets/icons/puzzles.svg';

const CompanyFeature = () => {
  return (
    <section className='feature'>
      <div className="feature-wrapper">
        <div className="heading-text-container">
            <h2 className="heading-v1 midBlueText">I want company feature</h2>
            <p className="text-v1 midBlueText">We believe scaling startups require a radically different kind of agency</p>
        </div>
        <div className="feature-card-container">
            <div className="feature-card">
                <img src={cardImg1} alt="" />
                <h3 className="feature-card-heading midBlueText">Easy to purchase</h3>
                <p className="text-v2 grayText">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
            </div>
            <div className="feature-card active-feature-card">
                <img src={cardImg2} alt="" />
                <h3 className="feature-card-heading">Easy to purchase</h3>
                <p className="text-v2">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
            </div>
            <div className="feature-card">
                <img src={cardImg3} alt="" />
                <h3 className="feature-card-heading midBlueText">Easy to purchase</h3>
                <p className="text-v2 grayText">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyFeature
