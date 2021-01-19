import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import IndexRoute from "./router/index.js"

function App() {
  return (    
    <Router>
      <div className="App">
        <IndexRoute />
      </div>
    </Router>
    
  );
}

export default App;
