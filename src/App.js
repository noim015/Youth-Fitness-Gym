import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';

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
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    
  );
}

export default App;
