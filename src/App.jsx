import { useState } from "react";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import Head from "./modules/head/Head";
import Post from "./modules/post/Post";
import Interval from "./modules/interval/Interval";
import Community from "./modules/community/Community";
import posts from "./modules/post/posts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Head />
      <Interval />
      <Post posts={posts} />

      <Community />
    </div>
  );
}

export default App;
