const marathone = "МАРАФОН";
const training = "ТРЕНИНГ";
const posts = [
  {
    type: marathone,
    name: "vtoroe_dihanie",
    img: `./${this.name}.png`,
    button: "ПОЛУЧИТЬ ПРОГРАММУ",
    benefits: [
      "8 дней марафона",
      "Прямой эфир каждый день",
      "Простое объяснение",
      "Чек листы на каждый день",
    ],
  },
  {
    type: training,
    name: "upravlai_emociami",
    img: `./${this.name}.png`,
    button: "ПОЛУЧИТЬ ПРОГРАММУ",
    benefits: [
      "2 Занятия по 3 часа",
      "Прямой эфир",
      "Простое объяснение",
      "Материалы прилагаются",
    ],
  },
];
!function check() {
  console.log(posts[1].img);
};
export default check();
