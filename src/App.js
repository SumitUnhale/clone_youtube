import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCon from "./components/MainCon";
import VideoPage from "./components/VideoPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainCon/>
      },
      {
        path: "watch",
        element: <VideoPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <>
        <Head/>
        {/* <Body/> */}
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
