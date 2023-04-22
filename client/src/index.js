import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import { ConfigProvider } from "antd";
import "./index.css";


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#131921",

            colorPrimaryHover: "#EB690A",
            colorLink: "#EB690A",
            colorLinkHover: "#131921",

            borderRadius: "2px",
            
          },
        },
        token: {
          borderRadius: "2px",
          colorPrimaryHover: "#EB690A",
          colorPrimary: "#131921",
          colorLink: "#EB690A",
          colorLinkHover: "#131921",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
