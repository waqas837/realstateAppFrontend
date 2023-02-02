import AddPost from "./Component/AddPost";
import EditPost from "./Component/EditPost";
import NavBar from "./Component/navbar";
import HomePage from "./Component/Home";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Bigform from "./Component/Bigform";
import Signup from "./Component/SignUp";
import Signin from "./Component/SignIn";
//import "./Component/fontawesome";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/form" component={Bigform} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add" component={AddPost} />
        <Route exact path="/edit/:id" component={EditPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
