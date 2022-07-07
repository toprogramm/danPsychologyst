import Benefits from "./benefits/Benefits";
import "./Post.scss";
import Button from "../button/Button";

function Post(props) {
  const posting = props.posts.map((post) => (
    <div className="post" key={post.id.toString()}>
      <div className="head" id={post.id}>
        {post.type}
      </div>
      <div className="content">
        <img className="img" src={post.img} />
        <div className="subcontent">
          <Button post={post} />
          <div className="benefits">
            <Benefits post={post} />
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{posting}</div>;
}

export default Post;
