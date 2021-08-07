import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
//import NavBar from "./components/NavBar";

const App = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/forgot-password" component={ForgotPasswordScreen} />
        <Route path="/reset/:resetToken" component={PasswordResetScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
