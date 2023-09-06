import "./Process.css";
import mainImg from '../../assets/images/process.png';
import dottedImg from '../../assets/images/dotted.png';

const Process = () => {
  return (
    <section className='process'>
        <div className="process-wrapper">
            <div className="process-img-wrapper">
                <div className="pink-animated-box"></div>
                <img src={mainImg} alt="" className="main-img" />
                <img src={dottedImg} alt="" className="dotted-patterns-img" />
            </div>
            <div className="process-text-content">
                <h2 className="heading-v1 midBlueText">Let your visitors know about your features.</h2>
                <p className="text-v1 midBlueText">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                <a href="/" className="btn">Our Process</a>
            </div>
        </div>
    </section>
  )
}

export default Process