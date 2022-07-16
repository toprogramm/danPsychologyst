const lessonsTypes = { marathone: "МАРАФОН", training: "ТРЕНИНГ" };
const path = "./src/modules/img/";
const png = ".png";

const posts = [
  {
    id: 1,
    type: lessonsTypes.marathone,
    name: "vtoroe_dihanie",
    nameRus: "ВТОРОЕ ДЫХАНИЕ",
    img: "vtoroe_dihanie.png",
    buttonText: "ПОЛУЧИТЬ ПРОГРАММУ",
    benefits: [
      "8 дней марафона",
      "Прямой эфир каждый день",
      "Простое объяснение",
      "Чек листы на каждый день",
    ],
  },
  {
    id: 2,
    type: lessonsTypes.training,
    name: "upravlai_emociami",
    nameRus: "УПРАВЛЯЙ ЭМОЦИЯМИ",
    img: path + "upravlai_emociami" + png,
    buttonText: "ПОЛУЧИТЬ ПРОГРАММУ",
    benefits: [
      "2 Занятия по 3 часа",
      "Прямой эфир",
      "Простое объяснение",
      "Материалы прилагаются",
    ],
  },
];
export default posts;
