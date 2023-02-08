import Home from "./component/pages/home/Home";
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
     <Settings></Settings>
    </div>
  );
}

export default App;
