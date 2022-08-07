export const changeActivity = (
  wrapper: Element,
  data: any[],
  activity: string
) => {
  let defaultText = "Recent " + activity + " activities";

  // replaceするdiv
  let div = document.createElement("div");
  console.log(wrapper.getAttribute("id"));

  let id = wrapper.getAttribute("id");
  if (id) div.setAttribute("id", id);

  let h = document.createElement("h3");
  h.textContent = defaultText;
  div.appendChild(h);

  // countが0じゃないactivityを5件取得
  let counter = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i][activity] > 0) {
      let h = document.createElement("h5");
      h.textContent = data[i].date;
      div.appendChild(h);

      let p = document.createElement("p");
      p.textContent = data[i][activity] + " steps";
      div.appendChild(p);
      counter++;
    }
    if (counter >= 5) break;
  }

  wrapper.replaceWith(div);
};
