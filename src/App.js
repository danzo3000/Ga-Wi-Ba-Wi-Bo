import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Scores } from "./components/Scores";

function App() {
  return (
    <div className="App">
      <Header />
      <Scores />
      <Game />
    </div>
  );
}

export default App;
