export const Scores = () => {
  return (
    <section className="scoreboard">
      <div className="player">
        <div className="player-one">
          <h2>Player 1</h2>
        </div>
        <div className="cpu">
          <h2>CPU</h2>
        </div>
      </div>
      <div className="score">
        <div className="player-one-score">
          <h2>00</h2>
        </div>
        <div className="cpu-score">
          <h2>00</h2>
        </div>
      </div>
      <div className="score-message">
        <div className="player-one-message">
          <h3>+1!</h3>
        </div>
        <div className="cpu-message">
          <h3>+1!</h3>
        </div>
      </div>
    </section>
  );
};
