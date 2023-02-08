import Home from "./component/pages/home/Home";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import Settings from "./component/pages/settings/Settings";
import Single from "./component/pages/single/Single";
import Write from "./component/pages/write/Write";
import TopBar from "./component/topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
     {/* <Home></Home> */}
     {/* <Single></Single> */}
     {/* <Write></Write> */}
     {/* <Settings></Settings> */}
     {/* <Login></Login> */}
     <Register></Register>
    </div>
  );
}

export default App;
