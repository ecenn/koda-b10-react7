import { Context } from "./Contexts"
import React from "react"


function Login() {
  const [user, setUser] = React.useState()
  return (
    <>
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 rounded border bg-blue-200 p-4">
        <Context.Provider value={{}}>
          <label htmlFor="">Email</label>
          <input className="bg-white rounded" type="email" name="email" id="email" />
          <label htmlFor="">Password</label>
          <input className="bg-white rounded" type="password" name="password" id="password" />
          <button className="py-4 bg-blue-600 rounded" type="submit">Login</button>
        </Context.Provider>
      </div>
    </div>
    </>
  )
}

export default Login