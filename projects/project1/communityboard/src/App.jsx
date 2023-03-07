import "./App.css";
import Board from "./components/Board";

const imgarr = [
  ".assets/aroy.jpeg",
  ".assets/bbq.jpeg",
  ".assets/chick.jpeg",
  ".assets/cpdiner.jpeg",
  ".assets/jerk.jpeg",
  ".assets/jumbo.jpeg",
  ".assets/krazi.jpeg",
  ".assets/latao.jpeg",
  ".assets/marathon.jpeg",
  ".assets/tacos.jpeg",
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
          <Board image = "src/assets/aroy.jpeg" name= "Aroy Thai" cuisine= "Thai" />

          <Board food-img = "src/assets/aroy.jpeg" name= "Kangnam BBQ" cuisine= "Korean" />
      </div>
    </div>
  );
};

export default App;
