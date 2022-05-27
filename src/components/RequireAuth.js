import { Navigate } from "react-router-dom";
import  Waiter  from "../views/Waiter";
import  Chef  from "../views/Chef";
import  Admin  from "../views/Admin";

const RequireAuth = ({children}) => {
  const isLogin = sessionStorage.getItem('user')
  const rolItem = sessionStorage.getItem('rol')
  console.log('ROLITEMMM', rolItem);
  console.log(children);
  if (rolItem === 'waiter' && isLogin !== null){
     return <Waiter/>
  }
  if (rolItem === 'manage' && isLogin !== null){
    return <Admin/>
  }
  if (rolItem === 'chef' && isLogin !== null){
    return <Chef/>
  }
  else {
    return <Navigate to='/'/>
  }
}

export default RequireAuth