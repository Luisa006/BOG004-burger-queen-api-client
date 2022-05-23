import React from "react";
import { BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from "../views/login"

function RouterApp() {
 return (
    <Router>
    <Routes>
      <Route exact path="/login" element={<Login />}>        
      </Route>
    </Routes>
  </Router>
 )
}
  
   export default RouterApp;