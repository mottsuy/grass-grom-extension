import { colors } from '../constants/color';
import { ActivityProps } from '../types/Activity';

export const changeColors = (
  elements: NodeListOf<Element>,
  data: any[],
  activity: ActivityProps
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

  let contributions = 0;
  for (let i = 0; i < elements.length - 5; i++) {
    const date = elements[i].getAttribute("data-date");

    if (date && date in data_by_date) {
      const value = data_by_date[date][activity];
      if (value == 0) {
        setColor(elements[i], "#ebedf0");
      } else if (value <= 1500) {
        setColor(elements[i], colors[activity].color01);
        contributions++;
      } else if (value <= 3000) {
        setColor(elements[i], colors[activity].color04);
        contributions++;
      } else if (value <= 6000) {
        setColor(elements[i], colors[activity].color07);
        contributions++;
      } else {
        setColor(elements[i], colors[activity].color);
        contributions++;
      }
    }
  }
  setColor(elements[elements.length - 5], "#ebedf0");
  setColor(elements[elements.length - 4], colors[activity].color01);
  setColor(elements[elements.length - 3], colors[activity].color04);
  setColor(elements[elements.length - 2], colors[activity].color07);
  setColor(elements[elements.length - 1], colors[activity].color);

  return contributions;
};

const setColor = (element: any, color: string) => {
  (element as HTMLElement).style.setProperty("fill", color, "important");
};
