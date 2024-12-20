
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <div className="mx-auto my-[100px] bg-white rounded-[10px] w-[40%] h-auto p-[20px] border shadow-md">
        <h1 className="text-[#303640] font-semibold text-[40px] mt-[30px] p-[0_10px]">
          Login
        </h1>
        <h3 className="text-[#303640c2] text-[14px] p-[0_10px] mb-[30px]">
          Sign in to your account
        </h3>
        <form>
          <div className="w-full grid grid-cols-[30%_70%] gap-4 my-[10px]">
            <label htmlFor="email" className="py-[8px] text-[#303640]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-[10px] border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="w-full grid grid-cols-[30%_70%] gap-4 my-[10px]">
            <label htmlFor="password" className="py-[8px] text-[#303640]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="p-[10px] border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="w-full flex justify-between items-center mt-[20px]">

            <Link to={"/dashboard"}>
              <button
                type="submit"
                className="w-[130px] bg-purple-600 text-white h-[40px] rounded-[5px] text-[18px] font-medium hover:bg-purple-700 transition duration-200"
              >
                Login
              </button>
            </Link>

            <Link to={"/"} className="text-[#5351c9] text-sm hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>

    </>
  )
}

export default App
