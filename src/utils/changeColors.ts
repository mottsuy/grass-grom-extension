export const changeColors = (elements:NodeListOf<Element>, data:any[]) => {
  for(let i=0; i<elements.length - 5; i++) {
    const date = elements[i].getAttribute("data-date");
    const searchResult = data.find((item:any) => item.date == (date as string))
    if(searchResult) {
      switch (searchResult.count) {
        case 1:
          (elements[i] as HTMLElement).style.setProperty('fill', 'red', 'important');
          break;
        case 2:
          (elements[i] as HTMLElement).style.setProperty('fill', 'blue', 'important');
          break;
        case 3:
          (elements[i] as HTMLElement).style.setProperty('fill', 'green', 'important');
          break;
          case 4:
            (elements[i] as HTMLElement).style.setProperty('fill', 'yellow', 'important');
            break;
          default:
            break;
      }
    }
  }
}