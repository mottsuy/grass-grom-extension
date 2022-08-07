import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { changeColors } from './utils/changeColors';
import { getAll } from './utils/api';
import { getDate } from './utils/getDate';

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

chrome.runtime.onMessage.addListener(async function (msg, sender, sendResponse) {
  try {
    if (msg) {
      const targetElements = document.querySelectorAll(".ContributionCalendar-day");
      console.log(msg.type, targetElements.length);
      if(targetElements.length <= 0 && msg.type === 'init') {
        sendResponse({status: true});
      } else {
        sendResponse({status: false});
      }
      const contributionList = document.querySelector(".contribution-activity-listing");
      const ajaxList = document.querySelector(".ajax-pagination-form");
      if(contributionList && ajaxList) {
        (contributionList as HTMLElement).style.setProperty('display', 'none');
        (ajaxList as HTMLElement).style.setProperty('display', 'none');
      }
      document.querySelector(".svg-tip")?.classList.remove("svg-tip");
      const data = await getAll();
      changeColors(targetElements, data.trainings);
      console.log(getDate());
    } else {
      sendResponse("failed");
    }
  } catch(e) {
    console.error(e)
  }
});
