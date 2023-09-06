import "./Growth.css";
import mainImg from '../../assets/images/growth.png';
import dottedImg from '../../assets/images/dotted.png';

const Growth = () => {
  return (
    <section className='growth'>
        <div className="growth-wrapper">
            <div className="growth-text-content">
                <h2 className="heading-v1 midBlueText">Peed Of Creative Service For Your Business Growth</h2>
                <p className="text-v1 midBlueText">We recruit doctors with the best honors and graduates at their universities, with a very broad and extraordinary experience they grow into professional doctors
                <br/>
                <br/>
                then received extraordinary supplies, guided for 2 years, they already understand very well about existing diseases and how to handle them properly</p>
            </div>
            <div className="growth-img-wrapper">
                <div className="orange-animated-box"></div>
                <img src={mainImg} alt="" className="main-img" />
                <img src={dottedImg} alt="" className="dotted-patterns-img" />
            </div>
        </div>
    </section>
  )
}

export default Growth
