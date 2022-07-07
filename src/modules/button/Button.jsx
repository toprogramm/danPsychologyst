import "./Button.scss";
function Button(props) {
  const BUTTON_NAME = props.post.buttonText;
  const NAME_OF_LESSON = props.post.nameRus;
  const whatsappMessage = "Получить программу " + NAME_OF_LESSON;
  const ENCODED = encodeURI(whatsappMessage);
  const phoneNumber = "996552524902";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${ENCODED}`;
  return (
    <a className="button" href={whatsappLink}>
      {BUTTON_NAME}
    </a>
  );
}

export default Button;
