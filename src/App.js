import "./styles.css";
import Search from "./Search";
import Temperatures from "./Temperatures";
import Conditions from "./Conditions";

export default function App() {
  return (
    <div className="App">
      <Search />
      <h1>New York</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <Conditions />
      <Temperatures />
      <ul>
        Coded by <a href="https://github.com/melinaeee/react-app">Melina</a>
      </ul>
    </div>
  );
}
