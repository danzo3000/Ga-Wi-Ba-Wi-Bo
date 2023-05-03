import logo from "../images/rock-scissors-paper.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="rock, paper, scissors" />
      <h1 className="main-title">"Ga-Wi-Ba-Wi-Bo!"</h1>
      <p>
        Ga-wi 가위 (Scissors)
        <br />
        Ba-wi 바위 (Rock)
        <br /> Bo 보 (Paper)
        <br /> The same in English and Korean - you know the rules!{" "}
      </p>
    </header>
  );
};
