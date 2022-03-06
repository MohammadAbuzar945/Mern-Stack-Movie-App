import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {

  const { user } = useContext(AuthContext);
  return (

    <Router>
      <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
      {/* <Routes>
       
      </Routes> */}
      <>
        <Topbar />
        <div className="container">

          <Sidebar />

          <Routes>
            <Route></Route>

            <Route exact path="/" element={<Home />}>
              {/* <Home /> */}
            </Route>
            <Route path="/users" element={<UserList />}>

            </Route>
            <Route path="/user/:userId" element={<User />}>

            </Route>
            <Route path="/newUser" element={<NewUser />}>

            </Route>
            <Route path="/movies" element={<MovieList />}>

            </Route>

            <Route path="/lists" element={<ListList />}>

            </Route>
            <Route path="/movie/:movieId" element={<Movie />}>

            </Route>
            <Route path="/list:listId" element={<List />}>

            </Route>
            <Route path="/newMovie" element={<NewMovie />}>

            </Route>
            <Route path="/newList" element={<NewList />}>

            </Route>



          </Routes>

        </div>
      </>
    </Router>
  );
}

export default App;
