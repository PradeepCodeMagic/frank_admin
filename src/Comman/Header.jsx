import React, { useContext, useState } from 'react'
import { CiLock } from 'react-icons/ci'
import { IoMenuOutline } from 'react-icons/io5'
import { SlUser } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { adminContext } from '../Context/Context';



export default function Header() {
  let {navVisible,setNavVisibility}=useContext(adminContext)

  let [profileDropDown, setProfileDropDown] = useState(false);
  return (
    <div
      className={
        navVisible === false
          ? "w-[80%] bg-white flex justify-between h-[60px] header py-[10px] px-[30px] fixed top-0 z-50"
          : "w-full bg-white flex justify-between h-[60px] header py-[10px] px-[30px] fixed top-0 z-50"
      }
    >
      <span className="my-[5px] text-[25px] w-[200px]  flex gap-[20px]">
        <IoMenuOutline
          className="cursor-pointer"
          onClick={() => {

            setNavVisibility(!navVisible);
          }}
        />
        <span className="text-[16px] font-extralight text-[#303640]">
          Dashboard
        </span>
      </span>
      <span
        className="object-contain relative cursor-pointer"
        onClick={() => setProfileDropDown(!profileDropDown)}
      >
        <img
          src="https://i.pinimg.com/736x/e1/66/42/e166425d25a36636707a2e3b295a90ee.jpg"
          alt="profile"
          width={40}
          height={40}
          className="rounded-[50%]"
        />
        <div
          className={
            profileDropDown === false
              ? "hidden"
              : "w-[180px] absolute top-[45px] -z-50 rounded-[5px] bg-white border right-[0px] profileBox"
          }
        >
          <ul className="list-none w-full ">

            <li className="w-full grid grid-cols-[20px_auto] box-border gap-[10px] p-[5px] hover:bg-[#f8f8f9]">
              <span className="p-[7px_1px]">
                <SlUser />{" "}
              </span>
              <span>
                <Link to={"/dashboard/profile"} >
                  Profile
                </Link>
              </span>
            </li>

            <li className="w-full box-border grid grid-cols-[30px_auto] gap-[10px] p-[5px] hover:bg-[#f8f8f9]">
              <span className="p-[7px_1px]">
                <CiLock />{" "}
              </span>
              <span>
                <Link to={"/"} >
                  Lock Account
                </Link>

              </span>
            </li>
          </ul>
        </div>
      </span>
    </div>
  )
}
