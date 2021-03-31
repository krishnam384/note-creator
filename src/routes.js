import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NetworkError from "./components/ErrorPages/NetworkError";
import { Notes } from "./notes/notes";
import Home from "./components/Home/Home";

export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/errorPages",
    component: NetworkError,
  },
  {
    path: "/notes",
    component: Notes,
  },
  {
    path: "/home",
    component: Home,
  },
];
