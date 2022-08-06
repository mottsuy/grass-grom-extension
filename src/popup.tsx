import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

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
            color: "#444444",
            status:false,
          },
          (msg) => {
            console.log(msg)
            if(msg.status) {
              console.log(msg.status)
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
        console.log("aaaaa");
        let url: URL | null = null;
      //   let start: string = "hoge";
      //   let end: string = "hoge";
      if(tabs[0].url) {
        url = new URL(tabs[0].url);
      }
        // const params = new URLSearchParams(url.search);
        // for(let param of params){
        //   if(param[0] === "from") start = param[1];
        //   else if(param[0] === "to") end = param[1];
        // }
      // }
        if (tab.id) {
          chrome.tabs.sendMessage(
            tab.id,
            {
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
      <ul style={{ minWidth: "700px" }}>
        <li>Current URL: {currentURL}</li>
        <li>Current Time: {new Date().toLocaleTimeString()}</li>
      </ul>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "5px" }}
      >
        count up
      </button>
      <button onClick={changeBackground} disabled={isDisabled}>change background</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
