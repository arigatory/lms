export const formatMyDate = date => {
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);

    return formattedDate;
  }