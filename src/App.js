import "./App.css";
import Banner from "./components/Banner";
import Brands_Banner from "./components/Brands_Banner";
import Button_Selectors from "./components/Button_Selectors";
import CarChoice from "./components/CarChoice";
// import Button_Selectors from "./components/Button_Selectors";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card
        heading="RECENT LAUNCHED CAR"
        heading2="Explore All Vehicles"
        view_all="View All Vehicle"
      />
      <Brands_Banner />
      <Card
        heading="NEW ARRIVALS"
        heading2="The most searched cars"
        view_all="View All SUV Cars"
        lists="list1"
      />
      <CarChoice lists="list2" />
    </>
  );
}

export default App;
