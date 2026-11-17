import { createBrowserRouter, RouterProvider } from 'react-router'
// import React from "react"
import Home from "./Home"
import Login from "./Login"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {
  // const [count, setCount] = useState(0)
  // const [user, setUser] = React.useState([])

  return (
    <RouterProvider router={router} />
  )
}

export default App
