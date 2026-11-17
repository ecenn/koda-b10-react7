import { useContext } from "react"
import { Context } from "./Contexts"
import { Link } from "react-router"

function Home() {
  const fromLogin = useContext(Context)
  return (
    <>
    <div className="flex flex-col py-2 px-4">
      data from login: {fromLogin}
      <Link to='/login'>Login</Link>
    </div>
    </>
  )
}

export default Home