import "./Button.scss";
function Button() {
  const buttonName = "ПОЛУЧИТЬ ПРОГРАММУ";

  const whatsappMessage = "Получить Программу Марафон ВТОРОЕ ДЫХАНИЕ";
  const encoded = encodeURI(whatsappMessage);
  const whatsappLink = `https://wa.me/996552524902?text=${encoded}`;
  return (
    <a className="button" href={whatsappLink}>
      {buttonName}
    </a>
  );
}

export default Button;
