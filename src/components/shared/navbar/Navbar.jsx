import Button from "../button/Button";
import "./style.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarStyles">
          <h2>easyMarkDown</h2>
          <div className="navbarButtons">
            <Button>Preview</Button>
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
