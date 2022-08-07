import * as React from "react";
import * as ReactDOM from "react-dom";

export const changeContributions = (
  contributions: number,
  activity: string
) => {
  const defaultText = contributions + " " + activity + " contributions";
  let contributeArea = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > h2");
  if (contributeArea) contributeArea.textContent = defaultText;
}