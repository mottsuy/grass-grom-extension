import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Container from "./layouts/Container";
import SelectForm from "./components/organisms/SelectForm";
import { ActivityProps } from "./types/Activity";
import Title from "./components/atoms/Title";
import { colors } from "./constants/color";

const Popup = () => {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [activity, setActivity] = useState<ActivityProps>("walking")

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            type: "init",
            color: "#444444",
            status:false,
          },
          (msg) => {
            if(msg.status) {
              setIsDisabled(msg.status);
            } else {
              setIsDisabled(false);
            }
          }
        );
      }
    });
  }, []);
    

  const changeBackground = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        const tab = tabs[0];
        let url: URL | null = null;
      if(tabs[0].url) {
        url = new URL(tabs[0].url);
      }
        if (tab.id) {
          chrome.tabs.sendMessage(
            tab.id,
            {
              type: "change",
              color: "#555555",
              url,
              activity,
            },
            (msg) => {
              console.log(msg);
            }
          );
        }
    });
  };

  return (
    <>
    <Container>
      <Title />
      <SelectForm
        onClick={changeBackground}
        disabled={isDisabled}
        backgroundColor={colors[activity].color}
        onChange={(e) => setActivity(e.value)}
      />
    </Container>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
