import LogoImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={LogoImg} />
      <h1>Investment Calculator</h1>
    </header>
  );
}
