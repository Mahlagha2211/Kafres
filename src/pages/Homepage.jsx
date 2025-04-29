import Carousel from "../components/homepageComponent/Carousel";
import Services from "../components/homepageComponent/Services";
import Works from "../components/homepageComponent/works";
import Navbar from "../components/Navbar";
import Order from "../components/homepageComponent/Order";
import Portfolio from "../components/homepageComponent/Portfolio";
import Question from "../components/homepageComponent/Question";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <Works />
      <Order />
      <Portfolio />
      <Question />
      <Footer />
    </>
  );
}
