import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Login  from "./views/Login";
import  Waiter  from "./views/Waiter";
import  NotFound  from "./views/NotFound";


export default function App() {
 return (
    <Router>    
     <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/waiter" element={<Waiter/>} />  
      <Route path="*" element={<NotFound/>} />     
     </Routes>        
    </Router>
 )
}
  
//    export default RouterApp;
