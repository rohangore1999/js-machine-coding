import ReactDOM from "react-dom";

import NotificationProvider from "./hooks/Notifications";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  rootElement
);
