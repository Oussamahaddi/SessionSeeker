import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Categories = React.lazy(() => import("../pages/Categories"))
const Register = React.lazy(() => import("../pages/Register"))
const Thanks = React.lazy(() => import("../pages/Thanks"))

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
      path: `${PathConstants.CATEGORIES}/:catId`,
      element: <Categories />
    },
    { 
      path: `${PathConstants.CATEGORIES}/:catId/:sessionId`,
      element: <Categories />
    },
    { 
      path: PathConstants.REGISTER, 
      element: <Register /> 
    },
    { 
      path: `${PathConstants.THANKS}`, 
      element: <Thanks /> 
    }
]

export default routes