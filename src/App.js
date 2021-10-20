
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';
import Membership from './Pages/Membership/Membership';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Courses from './Pages/Courses/Courses';
import Details from './Pages/Details/Details';
import BookNow from './Pages/BookNow/BookNow';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';

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
       <Route path="/register">
         <Register></Register>
       </Route>
       <PrivateRoute path="/booknow">
          <BookNow></BookNow>
       </PrivateRoute>
       <PrivateRoute path="/membership">
          <Membership></Membership>
       </PrivateRoute>
       <PrivateRoute path="/courses/:key">
         <Details></Details>
       </PrivateRoute>
       <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
     </Switch>
     <Footer></Footer>
   </Router>
 </AuthProvider>
    
  );
}

export default App;
