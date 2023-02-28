import React from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


import './App.css';

import Header from './Header/Header'
import Home from './Main/Home.jsx'
import Footer from './Footer/Footer'




const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
            <Header></Header>
            <Home/>
            <Footer></Footer>
        </div>),
  },
  {
    path: "/home",
    element: (<div>
            <Header></Header>
            <h1>The Generals</h1>
            <Footer></Footer>
        </div>),
  },
  {
    path: "/login",
    element: (
      <div>
      <Header></Header>
      <h1>Login Page</h1>
      <Footer></Footer>
  </div>
    ),
  },
  {
    path: "/case-studies",
    element: (
      <div>
      <Header></Header>
      <h1>Case Studies</h1>
      <Footer></Footer>
  </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
      <Header></Header>
      <h1>Contacts</h1>
      <Footer></Footer>
  </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
      <Header></Header>
      <h1>Register</h1>
      <Footer></Footer>
  </div>
    ),
  },
  {
    path: "*",
    element:  (<div>
    <Header></Header>
    <h1>Error </h1>
    <Footer></Footer>
</div>)
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


// function App() {
//   return (
//     <div>
//     {/* <Header></Header> */}
//      <h1>The Generals</h1>
//      <Footer></Footer>
//    </div>

//   );
// }

export default App;
