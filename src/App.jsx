
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import UserDash from "./Components/UserDash";
import Header from "./Components/Users/UserLayouts/Header";
import UserLogin from "./Components/Users/Authentication/UserLogin";
import UserRegister from "./Components/Users/Authentication/UserRegister";
function App() {

  return (
    <UserRegister/>
    // <BrowserRouter>
    // <Header/>
    // {/* <UserDash/> */}
    // <Routes>
    //   {/* <Route path="UserLogin" element={<UserLogin/>}></Route> */}
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
