export const Scores = ({ playerScore, cpuScore, isPlusCpu, isPlusPlayer }) => {
  return (
    <section className="scoreboard">
      <div className="player">
        <div className="player-one">
          <h2>Player</h2>
        </div>
        <div className="cpu">
          <h2>CPU</h2>
        </div>
      </div>
      <div className="score">
        <div className="player-one-score">
          <h2>{playerScore}</h2>
        </div>
        <div className="cpu-score">
          <h2>{cpuScore}</h2>
        </div>
      </div>
      <div className="score-message">
        <div className={isPlusPlayer ? "player-one-message" : "hidden"}>
          <h3>+1</h3>
        </div>
        <div className={isPlusCpu ? "cpu-message" : "hidden"}>
          <h3>+1</h3>
        </div>
      </div>
    </section>
  );
};
