import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const Loading = () => <div> ...loading </div>;
ReactDOM.render(
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
          <App />
      </Suspense>
    </BrowserRouter>,
  document.getElementById("root")
);
