function Image(props) {
  const url = props.post.img;
  const img = new URL(url, import.meta.url);
  function Logo() {
    return <img src={img} className="img" alt="img" />;
  }
  return Logo();
}
export default Image;
