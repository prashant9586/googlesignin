import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="main_class" >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
