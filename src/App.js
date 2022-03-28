import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import React from "react";
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs";

import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tuiter from "./components/Tuiter";
import HomeScreen from "./components/Tuiter/home-screen";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfileScreen from "./components/Tuiter/ProfileScreen/EditProfileScreen";
import Assignment6 from "./components/Labs/assignment6";
import Assignment7 from "./components/Labs/assignment7";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index element={<HelloWorld/>}/>
                      <Route path="hello"
                             exact={true}
                             element={<HelloWorld/>}/>
                      <Route path="labs"
                             exact={true}
                             element={<Labs/>}/>
                      <Route path="labs/a6"
                             exact={true}
                             element={<Assignment6/>}/>
                      <Route path="labs/a7"
                             exact={true}
                             element={<Assignment7/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index element={<HomeScreen/>}/>
                          <Route path="explore"
                                 exact={true}
                                 element={<ExploreScreen/>}/>
                          <Route path="profile" element={<ProfileScreen/>}/>
                          <Route path="profile/editprofile" element={<EditProfileScreen/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
