import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BannerSlider from "./components/header/BannerSlider";
import Banner from "./components/banner/Banner";
import Carouselsection from "./components/Carouselsection";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
       
    {/* <Header1 /> */}
      {/* <Header /> */}
      <Banner/>
      <Home />
      {/* <About />*/}
      <ContactUs/>
      <Map/>
      <Footer />
    </>
  );
}

export default App;
