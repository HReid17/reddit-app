import "../Header/Header.css";
import "../Searchbar/Searchbar"
import Searchbar from "../Searchbar/Searchbar";

export default function Header() {

  return (
    <header className="head">
      <div className="logo">
        <p className="brand">
          <span className="brand-muted">Your</span>
          <span className="brand-primary">Reddit</span>
        </p>
      </div>
      <div className="searchbar">
      <Searchbar />
      </div>
    </header>
  );
}
