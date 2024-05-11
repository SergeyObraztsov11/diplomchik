export const weatherContext = (readyDataMessage, msg, context) => {
  context = "default";
  readyDataMessage.message = "Ищем погоду...";
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
