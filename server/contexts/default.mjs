export const defaultContext = (readyDataMessage, msg, context) => {
  const { message } = msg;

  if (message === "ping") {
    readyDataMessage.message = "pong";
    context = "default";
  }

  if (message === "Какая сегодня погода?") {
    readyDataMessage.message = "Введите своё местоположение";
    readyDataMessage.buttons = [
      {
        title: "Текущее место",
        command: "Текущее место",
      },
    ];
    context = "weather";
  }

  if (message === "Привет") {
    readyDataMessage.message = "Приветствую! Чем могу помочь?";
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
    context = "default";
  }

  if (message === "Часто задаваемые вопросы" || message === "FAQ") {
    readyDataMessage.message = "Часто задаваемые вопросы:";
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
    context = "default";
  }

  if (
    message === "Хочу найти место" ||
    message === "Место" ||
    message === "Найти место" ||
    message === "Поиск места"
  ) {
    readyDataMessage.message = "Введите название места";
    readyDataMessage.buttons = [];
    context = "search_place";
  }

  return { readyDataMessage: readyDataMessage, context: context };
};
