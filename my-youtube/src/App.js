import "./App.css";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import {Provider} from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ShortsPage from "./components/ShortsPage";
import VideosPage from "./components/VideosPage";
import LivePage from "./components/LivePage";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      },
      {
        path: '/shorts',
        element: <ShortsPage />
      },
      {
        path: '/videos',
        element: <VideosPage />
      },
      {
        path: '/live',
        element: <LivePage />
      }
    ]
  },
])

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <div className="App min-h-screen">
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
