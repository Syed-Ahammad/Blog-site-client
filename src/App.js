import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/layout/main/Main";
import Home from "./component/pages/home/Home";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import Settings from "./component/pages/settings/Settings";
import Single from "./component/pages/single/Single";
import Write from "./component/pages/write/Write";
import store from "./redux/store";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/singlePost:postId",
          element: <Single></Single>,
        },
        {
          path: "/write",
          element: <Write></Write>,
        },
        {
          path: "/settings",
          element: <Settings></Settings>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
