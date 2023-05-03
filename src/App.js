import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { useState } from "react";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [isPlusPlayer, setIsPlusPlayer] = useState(false);
  const [isPlusCpu, setIsPlusCpu] = useState(false);
  return (
    <div className="App">
      <Header />
      <Scores
        playerScore={playerScore}
        cpuScore={cpuScore}
        isPlusPlayer={isPlusPlayer}
        isPlusCpu={isPlusCpu}
      />
      <Game
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        cpuScore={cpuScore}
        setCpuScore={setCpuScore}
        setIsPlusCpu={setIsPlusCpu}
        setIsPlusPlayer={setIsPlusPlayer}
      />
    </div>
  );
}

export default App;
