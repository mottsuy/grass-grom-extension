import * as React from "react";
import * as ReactDOM from "react-dom";
import { changeColors } from "./utils/changeColors";
import { getAll } from "./utils/api";
import { getDate } from "./utils/getDate";
import { changeOverview } from "./utils/changeOverview";
import { changeActivity } from "./utils/changeActivity";

const createOrginElement = (id: string, component: any) => {
  let contactBotAlertDom = document.getElementById(id);
  if (!contactBotAlertDom) {
    const elem = document.createElement("div");
    elem.setAttribute("id", id);
    const main = document.querySelector("body");
    if (main) {
      main.appendChild(elem);
    }
  }
  ReactDOM.render(component, document.getElementById(id));
};

chrome.runtime.onMessage.addListener(async function (
  msg,
  sender,
  sendResponse
) {
  try {
    if (msg) {
      const targetElements = document.querySelectorAll(
        ".ContributionCalendar-day"
      );
      if (targetElements.length <= 0) {
        console.log("hoge");
        sendResponse({ status: true });
      }
      sendResponse({ status: false });

      const username = document
        .querySelector("[itemprop=additionalName]")
        ?.textContent?.trim();
      const data = await getAll(username);
      changeColors(targetElements, data.trainings, "walking");

      const overviewWrapper = document.querySelector("#user-activity-overview");
      if (overviewWrapper)
        changeOverview(overviewWrapper, data.trainings, "walking");

      const activityWrapper = document.querySelector(
        "#js-contribution-activity"
      );
      if (activityWrapper)
        changeActivity(activityWrapper, data.trainings, "walking");

      console.log(getDate());
    } else {
      sendResponse("failed");
    }
  } catch (e) {
    console.error(e);
  }
});
