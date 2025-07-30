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
import Product from "./Pages/Product";
import CheckOut from "./Pages/CheckOut";
import Login from "./Pages/LogIn";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayOut_One />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:checkproduct" element={<CheckOut />} />
          <Route path="/product/:singleproduct" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="">
      <ToastContainer />
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
