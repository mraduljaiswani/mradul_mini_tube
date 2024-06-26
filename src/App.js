import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Body />,
  //   children: [
  //     { path: "/", element: <MainContainer /> },
  //     { path: "watch", element: <WatchPage /> },
  //     { path: "demo", element: <Demo /> },
  //   ],
  // },

  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Header />
            <MainContainer />
          </div>
        ),
      },
      {
        path: "results",
        element: (
          <div className="w-full">
            <Header />
            <MainContainer />,
          </div>
        ),
      },
      {
        path: "watch",
        element: (
          <div className="w-full">
            <Header />
            <WatchPage />,
          </div>
        ),
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
