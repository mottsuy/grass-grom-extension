import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Container from "./layouts/Container";
import SelectForm from "./components/organisms/SelectForm";

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      setCurrentURL(tabs[0].url);
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            type: "init",
            color: "#444444",
            status:false,
          },
          (msg) => {
            console.log(msg)
            // if(msg.status) {
            //   console.log(msg.status)
            //   setIsDisabled(msg.status);
            // } else {
            //   setIsDisabled(false);
            // }
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
            },
            (msg) => {
              console.log("result message:", msg);
              
            }
          );
        }
    });
  };

  return (
    <>
    <Container>
      <SelectForm onClick={changeBackground} disabled={isDisabled} backgroundColor={"red"}/>
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
