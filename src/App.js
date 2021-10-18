import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';
import Services from './Pages/Services/Services';
import Membership from './Pages/Membership/Membership';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
     <AuthProvider>
         <BrowserRouter>
       <Header></Header>
        <Switch>
           <Route exact path='/'>
              <Home></Home>
           </Route>
           <Route path='/home'>
              <Home></Home>
           </Route>
           <Route path='/login'>
              <Login></Login>
           </Route>
           <Route path='/register'>
              <Register></Register>
           </Route>
           <Route path='/services'>
              <Services></Services>
           </Route>
           <PrivateRoute path='/membership'>
              <Membership></Membership>
           </PrivateRoute>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    
  );
}

export default App;
