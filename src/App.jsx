import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Process from "./Components/Process/Process";
import CompanyFeature from "./Components/CompanyFeature/CompanyFeature";
import Growth from "./Components/Growth/Growth";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import CallToAction from "./Components/CallToAction/CallToAction";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <Process/>
      <CompanyFeature/>
      <Growth/>
      <Portfolio/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default App
