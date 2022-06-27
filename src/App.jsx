import { useState } from "react";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import Head from "./modules/head/Head";
import Post from "./modules/post/Post";
import Interval from "./modules/interval/Interval";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head />
      <Interval />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
