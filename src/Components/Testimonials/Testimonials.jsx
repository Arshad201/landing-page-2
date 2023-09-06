import './Testimonials.css';
import userImg from '../../assets/images/girl.png';
import loveingEmoji from '../../assets/icons/emoji.svg';

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="testimonials-wrapper">
            <div className="heading-text-container">
                <h2 className="heading-v2 midBlueText">Our Testimonial</h2>
                <p className="text-v1 midBlueText">We believe scaling startups require a radically different kind of agency</p>
            </div>
            <div className="testimonials-card-container">
                <div className="testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-body">
                            <p className='grayText'>The experts easily identified the wand guided us through the creation of the c.</p>
                            <div>
                                <span className="testimonial-bold-line midBlueText">I love Sway</span>
                                <img src={loveingEmoji} alt="" />
                            </div>
                        </div>
                        <div className="testimonial-footer">
                            <span>Vincent Smith</span>
                            <span>CEO at Ritmo</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-body">
                            <p className='grayText'>The experts easily identified the wand guided us through the creation of the c.</p>
                            <div>
                                <span className="testimonial-bold-line midBlueText">I love Sway</span>
                                <img src={loveingEmoji} alt="" />
                            </div>
                        </div>
                        <div className="testimonial-footer">
                            <span>Vincent Smith</span>
                            <span>CEO at Ritmo</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-body">
                            <p className='grayText'>The experts easily identified the wand guided us through the creation of the c.</p>
                            <div>
                                <span className="testimonial-bold-line midBlueText">I love Sway</span>
                                <img src={loveingEmoji} alt="" />
                            </div>
                        </div>
                        <div className="testimonial-footer">
                            <span>Vincent Smith</span>
                            <span>CEO at Ritmo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Testimonials
