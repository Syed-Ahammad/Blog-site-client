import Home from "./component/pages/home/Home";
import Single from "./component/pages/single/Single";
import TopBar from "./component/topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
     {/* <Home></Home> */}
     <Single></Single>
    </div>
  );
}

export default App;
