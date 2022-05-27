import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Login  from "./views/Login";
import  Waiter  from "./views/Waiter";
import  Chef  from "./views/Chef";
import  Admin  from "./views/Admin";
import  NotFound  from "./views/NotFound";
import RequireAuth from "./components/RequireAuth";


export default function App() {
 return (
    <Router>    
     <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/waiter" element={<RequireAuth><Waiter/></RequireAuth>} />  
      <Route path="/chef" element={<RequireAuth><Chef/></RequireAuth>} />  
      <Route path="/manage" element={<RequireAuth><Admin/></RequireAuth>} />  
      <Route path="*" element={<NotFound/>} />     
     </Routes>        
    </Router>
 )
}
  
//    export default RouterApp;
