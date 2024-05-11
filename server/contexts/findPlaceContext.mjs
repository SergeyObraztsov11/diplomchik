export const findPlaceContext = (readyDataMessage, msg, context) => {
  const { message } = msg;

  readyDataMessage.message = "Мы ищем Ваше место " + message;
  context = "default";
  readyDataMessage.buttons = [
    {
      title: "Хочу найти место",
      command: "Найти место",
    },
    {
      title: "Какая сегодня погода?",
      command: "Какая сегодня погода?",
    },
    {
      title: "FAQ",
      command: "Часто задаваемые вопросы",
    },
    {
      title: "Случайное место",
      command: "Случайное место",
    },
    {
      title: "История запросов",
      command: "История запросов",
    },
  ];

  return { readyDataMessage: readyDataMessage, context: context };
};
