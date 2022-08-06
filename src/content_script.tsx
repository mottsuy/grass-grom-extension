import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

const createOrginElement = (id:string, component:any) => {
  let contactBotAlertDom = document.getElementById(id);
  if (!contactBotAlertDom) {
    const elem = document.createElement('div');
    elem.setAttribute('id', id);
    const main = document.querySelector('body');
    if(main) {
      main.appendChild(elem);
    }
  }
  ReactDOM.render(component, document.getElementById(id));
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    const data = msg.data.trainings;
    console.log(data);
    console.log("Receive color = " + msg.color);
    const day = document.querySelectorAll(".ContributionCalendar-day");
    const firstDay = day[0].getAttribute("data-date");
    const lastDay = day[day.length - 6].getAttribute("data-date");
    console.log(firstDay,lastDay)
    for(let i=0; i<day.length - 5; i++) {
      const date = day[i].getAttribute("data-date");
      const searchResult = data.find((item:any) => item.date == (date as string))
      if(searchResult) {
        console.log(searchResult.count)
        switch (searchResult.count) {
          case 1:
            (day[i] as HTMLElement).style.setProperty('fill', 'red', 'important');
            break;
          case 2:
            (day[i] as HTMLElement).style.setProperty('fill', 'blue', 'important');
            break;
          case 3:
            (day[i] as HTMLElement).style.setProperty('fill', 'green', 'important');
            break;
            case 4:
              (day[i] as HTMLElement).style.setProperty('fill', 'yellow', 'important');
              break;
            default:
              break;
        }
      }
    }
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});
