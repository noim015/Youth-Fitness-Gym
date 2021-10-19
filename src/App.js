import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';
import Services from './Pages/Services/Services';
import Membership from './Pages/Membership/Membership';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Courses from './Pages/Courses/Courses';
import Details from './Pages/Details/Details';

function App() {
  return (
   <AuthProvider>
   <Router>
     <Header> </Header>

     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>

       <Route path="/home">
         <Home></Home>
       </Route>

       

       

       <Route exact path="/courses">
         <Courses></Courses>
       </Route>

       

       <Route path="/login">
         <Login></Login>
       </Route>

       

       

       <Route path="/courses/:key">
         <Details></Details>
       </Route>

       
     </Switch>
     
   </Router>
 </AuthProvider>
    
  );
}

export default App;
