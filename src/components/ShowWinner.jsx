export const ShowWinner = ({ winner }) => {
  let message = "";
  if (winner === "player") {
    message += "You win!";
  } else if (winner === "cpu") {
    message += "CPU wins!";
  } else if (winner === "draw") {
    message += "Draw!";
  } else {
    message += "";
  }
  return (
    <div className="winner-message">
      <h2>{message}</h2>
    </div>
  );
};
