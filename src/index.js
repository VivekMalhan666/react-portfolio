import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Loader = () => <img src="/images/loader.gif" alt="Loader" />;
ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,

  document.getElementById("root")
);
registerServiceWorker();
