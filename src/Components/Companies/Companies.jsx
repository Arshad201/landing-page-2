import "./Companies.css";
import nike from "../../assets/icons/Nike.svg";
import spotify from "../../assets/icons/Spotify.svg";
import google from "../../assets/icons/Google.svg";
import apple from "../../assets/icons/Apple.svg";
import amazon from "../../assets/icons/Amazon.svg";
import airBnb from "../../assets/icons/Airbnb.svg";


const Companies = () => {
  return (
    <section className='company'>
      <div className="company-wrapper">
        <h3>Trusted by the world's best companies</h3>
        <div>
            <img src={nike} alt="nike" />
            <img src={spotify} alt="spotify" />
            <img src={google} alt="google" />
            <img src={apple} alt="apple" />
            <img src={amazon} alt="amazon" />
            <img src={airBnb} alt="airbnb" />
        </div>
      </div>
    </section>
  )
}

export default Companies
