// rafce->react arrow function component export
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Mainlayouts from "./layouts/Mainlayouts";
import Jobspage from "./pages/Jobspage";
import React from "react";
import NotFoundPage from "./pages/NotFoundPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayouts/>}>
      <Route index element={<Homepage/>} />
      <Route path="/jobs" element ={<Jobspage/>}/>
      <Route path="*" element={<NotFoundPage/>} />

    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
