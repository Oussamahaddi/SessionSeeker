import React from "react"
import PathConstants from "./pathConstants"

// const Home = React.lazy(() => import("../pages/Home"))
// const About = React.lazy(() => import("../pages/About"))
// const Categories = React.lazy(() => import("../pages/Categories"))
// const Register = React.lazy(() => import("../pages/Register"))

import Home from "../pages/Home"
import About from "../pages/About"
import Categories from "../pages/Categories"
import Register from "../pages/Register"

const routes = [
    { 
      path: PathConstants.HOME, 
      element: <Home /> 
    },
    { 
      path: PathConstants.ABOUT, 
      element: <About /> 
    },
    { 
      path: PathConstants.CATEGORIES, 
      element: <Categories /> 
    },
    { 
      path: PathConstants.REGISTER, 
      element: <Register /> 
    },
]

export default routes