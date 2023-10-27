import React from "react";
import Routes from "./routes/Routes";
import { Components } from "./components";

import "./scss/app.scss";


function App() {

  return (
    <div className="wrapper">
        <Components.Header/>
        <div className="content">
          <Routes/>
        </div>
    </div>
  );
}

export default App;
