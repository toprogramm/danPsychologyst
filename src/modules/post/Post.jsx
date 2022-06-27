import Benefits from "./benefits/Benefits";
import img from "../img/marathone.png";
import "./Post.scss";
import Button from "../button/Button";

function Post() {
  const headTitle = "МАРАФОН";
  return (
    <div className="post">
      <div className="head">{headTitle}</div>
      <div className="content">
        <img className="img" src={img} />
        <div className="subcontent">
          <Button />
          <Benefits />
        </div>
      </div>
    </div>
  );
}

export default Post;
