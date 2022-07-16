import Benefits from "./benefits/Benefits";
import "./Post.scss";
import Button from "../button/Button";
import Image from "../img/Image";

function Post(props) {
  const posting = props.posts.map((post) => (
    <div className="post" key={post.id.toString()}>
      <div className="head" id={post.id}>
        {post.type}
      </div>
      <div className="content">
        <Image post={post} />

        <div className="subcontent">
          <Button post={post} />
          <div className="benefits">
            <Benefits post={post} />
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className="posts">{posting}</div>;
}

export default Post;
