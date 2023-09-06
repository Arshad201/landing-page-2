import "./Footer.css";
import fbIcon from '../../assets/icons/fb.svg';
import instaIcon from '../../assets/icons/insta.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrapper">
        <div className="top-footer">
          <div>
              <a href="/">About</a>
              <a href="/">Serivces</a>
              <a href="/">Pricing plans</a>
              <a href="/">Privacy</a>
              <a href="/">Contact us</a>
          </div>
          <div>
            <a href="/">
                <img src={fbIcon} alt="" />
            </a>
            <a href="/">
                <img src={instaIcon} alt="" />
            </a>
            <a href="/">
              <img src={twitterIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-widgets">
          <div className="widget">
              <span className="widget-heading">About</span>
              <a href="/">About Sway</a>
              <a href="/">Plans & Pricing</a>
              <a href="/">Services</a>
              <a href="/">Blogs</a>
          </div>
          <div className="widget">
              <span className="widget-heading">Products</span>
              <a href="/">Primary blocks</a>
              <a href="/">Content blocks</a>
              <a href="/">Infographic blocks</a>
              <a href="/">Business blocks</a>
          </div>
          <div className="widget">
              <span className="widget-heading">Resources</span>
              <a href="/">Support center</a>
              <a href="/">Documentation</a>
              <a href="/">Newsletter</a>
              <a href="/">Chanelog</a>
          </div>
          <div className="widget">
              <span className="widget-heading">Follow us</span>
              <a href="/">Twitter</a>
              <a href="/">Dribble</a>
              <a href="/">Facebook</a>
              <a href="/">Linkedin</a>
          </div>
          <div className="widget">
              <span className="widget-heading">Conatact</span>
              <div>
                New York. 112 W
                <br/>
                34th St, Manhattan
                <br/>
                (1) 212-445-4320
              </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="bottom-footer-wrapper">
          <div className="copyright">Sways by keydesign. All Rights Reserved</div>
          <div>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
