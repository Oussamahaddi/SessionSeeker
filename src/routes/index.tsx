import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Categories = React.lazy(() => import("../pages/Categories"))
const Register = React.lazy(() => import("../pages/Register"))

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