import React, { Component } from "react";
import Homepop from "./components/popups/Homepop";
import Home from "./components/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div>

            <Homepop />

          <Router>
            <Routes>
            <Route path="/" element={<Home />}></Route>
              <Route path="/Home" element={<Home />}></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
export default App;