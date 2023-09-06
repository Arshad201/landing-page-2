import "./Hero.css";
import heroImg from  "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-wrapper">
            <div className="hero-text-content">
                <h1 className="hero-heading darkBlueText">The Better Way To <span className="blueText">Success</span>  In Your Business</h1>
                <p className="hero-desc dimGrayText">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <a href="/" className="btn">HIRE ME</a>
            </div>
            <div className="hero-img-wrapper">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
