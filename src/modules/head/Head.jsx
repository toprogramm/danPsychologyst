import "./Head.scss";
import logo from "../img/logo.png";
function Head() {
  const motivationHeadPost = "РАСКРОЙ ЭНЕРГИЮ";
  return (
    <div className="headLine">
      <div className="contacts"></div>
      <div className="motivationPost">{motivationHeadPost}</div>
      <img className="logo" src={logo} />
    </div>
  );
}

export default Head;
