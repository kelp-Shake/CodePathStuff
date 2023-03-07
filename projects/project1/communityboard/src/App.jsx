import "./App.css";
import Board from "./components/Board";

const imgarr = [
  "/src/images/aroy.jpeg",
  "/src/images/bbq.jpeg",
  "/src/images/chick.jpeg",
  "/src/images/cpdiner.jpeg",
  "/src/images/jerk.jpeg",
  "/src/images/jumbo.jpeg",
  "/src/images/krazi.jpeg",
  "/src/images/latao.jpeg",
  "/src/images/marathon.jpeg",
  "/src/images/tacos.jpeg",
];
const namearr = [
  "Aroy Thai",
  "Kangnam BBQ",
  "Chick Fil a",
  "College Park Diner",
  "The Jerk Pit",
  "Jumbo Jumbo Cafe",
  "Krazi Kabob",
  "Latao Hotpot",
  "Marathon Deli",
  "Tacos a la Madre",
];
const cuisinearr = [
  "Thai",
  "Korean",
  "American",
  "American",
  "Jamaican",
  "Taiwanese",
  "Pakistani",
  "Chinese",
  "Greek",
  "Mexican",
];
const websitearr = [
  "https://www.doordash.com/store/aroy-thai-restaurant-college-park-23671900/",
  "https://www.kangnambbqcollegepark.com/",
  "https://www.chick-fil-a.com/",
  "https://www.collegeparkdiner.com/",
  "https://myjerkpit.com/",
  "https://www.jumbojumbocafe.com/",
  "https://www.doordash.com/store/krazi-kebob-college-park-250145/",
  "https://lataohotpot.com/",
  "https://www.marathondelimd.com/",
  "https://www.tacosalamadre.com/",
];

const App = () => {
  return (
    <div className="App">
      <h1>Top 10 Food Places in College Park, MD</h1>
      <div id="food-container">
          {imgarr.map((image, i) => <Board key={i} img = {image} name = {namearr[i]} cuisine = {cuisinearr[i]} website = {websitearr[i]}/>)}
      </div>

    </div>
  );
};

export default App;
