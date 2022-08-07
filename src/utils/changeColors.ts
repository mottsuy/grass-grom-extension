export const changeColors = (
  elements: NodeListOf<Element>,
  data: any[],
  activity: string
) => {
  // 日付ごとにデータを連想配列に格納
  let data_by_date: { [key: string]: any } = {};
  data.forEach(
    (element) =>
      (data_by_date[element.date] = {
        walking: element.walking,
        running: element.running,
        cycling: element.cycling,
        swimming: element.swimming,
      })
  );

  for (let i = 0; i < elements.length - 5; i++) {
    const date = elements[i].getAttribute("data-date");

    if (date && date in data_by_date) {
      const value = data_by_date[date][activity];

      if (value == 0) {
        setColor(elements[i], "gray");
      } else if (value <= 1500) {
        setColor(elements[i], "lemonchiffon");
      } else if (value <= 3000) {
        setColor(elements[i], "wheat");
      } else if (value <= 6000) {
        setColor(elements[i], "burlywood");
      } else {
        setColor(elements[i], "tan");
      }
    }
  }
};

const setColor = (element: any, color: string) => {
  (element as HTMLElement).style.setProperty("fill", color, "important");
};
