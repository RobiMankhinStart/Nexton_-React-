import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import LayOut_One from "./Layouts/LayOut_One";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayOut_One />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
