import "./App.css";
import "./styling/Style.css";
import "./styling/Header.css";
import "./styling/About.css";
import "./styling/Discover.css";
import "./styling/Food.css";
import "./styling/Pictures.css";
import "./styling/Areas.css";
import "./styling/Contact.css";
import "./styling/Pricing.css";
import "./styling/Footer.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Discover from "./Components/Discover";
import Areas from "./Components/Areas";
import Footer from "./Components/Footer";
import FoodContainer from "./Components/FoodContainer";
import PictureContainer from "./Components/PictureContainer";
import Contact from "./Components/Contact";
import PricingContainer from "./Components/PricingContainer";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Discover></Discover>
      <Areas></Areas>
      <FoodContainer></FoodContainer>
      <PictureContainer></PictureContainer>
      <PricingContainer></PricingContainer>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
