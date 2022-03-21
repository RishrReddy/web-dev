import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import React from "react";
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore"
                         exact={true}
                         element={<ExploreScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
