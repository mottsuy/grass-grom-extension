import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { changeColors } from './utils/changeColors';
import { getAll } from './utils/api';

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
      const data = await getAll();
      const targetElements = document.querySelectorAll(".ContributionCalendar-day");
      changeColors(targetElements, data.trainings);
      sendResponse("finish");
    } else {
      sendResponse("failed");
    }
  } catch(e) {
    console.error(e)
  }
});
