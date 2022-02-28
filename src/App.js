import "./App.css";
import Product from "./Components/Products";
import Header from "./Components/Header";
import Quotes from "./Components/Quotes";
import Review from "./Components/Review";
import LearnMore from "./Components/LearnMore";
import MoreState from "./Components/MoreState";
import Footer from "./Components/Footer";
import Estimate from "./Components/Estimate";
import Question from "./Components/Question";

function App() {
  return (
    <div className="app">
      <Header />
      <Product />
      <Quotes />
      <Review />
      <Question />
      <Estimate />
      <LearnMore />
      <MoreState />
      <Footer />
    </div>
  );
}

export default App;
