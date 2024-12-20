import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="w-[90%] mx-auto mt-[140px] mb-[20px] bg-white border rounded-[10px]">
        <span className="block text-[#303640] bg-[#f8f8f9] rounded-[10px_10px_0_0_0] h-[60px] p-[15px] box-border font-bold text-[25px] border-b">
          Profile
        </span>
        <div className="w-full grid grid-cols-[2fr_2fr]">
          <div className="p-[10px]">
            <form>
              <div className="w-full mb-[15px]">
                <span className="block mb-[5px]">Name</span>
                <input
                  type="text"
                  name="name"
                  className="w-full border h-[35px] rounded-[5px] p-2"
                />
              </div>
              <div className="w-full mb-[15px]">
                <span className="block mb-[5px]">Social Link</span>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <RiFacebookFill />
                  </span>
                  <input
                    type="text"
                    name="fb"
                    className="w-full border h-[35px] rounded-[5px] p-2"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <CiInstagram />
                  </span>
                  <input
                    type="text"
                    name="instagram"
                    className="w-full border h-[35px] rounded-[5px] p-2"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <FaYoutube />
                  </span>
                  <input
                    type="text"
                    name="youtube"
                    className="w-full border h-[35px] rounded-[5px] p-2"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <FaXTwitter />
                  </span>
                  <input
                    type="text"
                    name="twitter"
                    className="w-full border h-[35px] rounded-[5px] p-2"
                  />
                </div>
              </div>
              <div className="w-full my-[20px]">
                <span className="block mb-[5px]">Logo</span>
                <div className="w-[50px] h-[50px] object-fill mb-[10px]">
                  <img src="" alt="Logo" className="w-full h-full" />
                </div>
                <input
                  type="file"
                  name="logo"
                  className="border w-full h-[35px] rounded-[5px] p-2 mb-[10px]"
                />
              </div>
              <div className="w-full my-[20px]">
                <span className="block mb-[5px]">Fav Icon</span>
                <div className="w-[50px] h-[50px] object-fill mb-[10px]">
                  <img src="" alt="Fav Icon" className="w-full h-full" />
                </div>
                <input
                  type="file"
                  name="favicon"
                  className="border w-full h-[35px] rounded-[5px] p-2 mb-[10px]"
                />
              </div>
              <div className="w-full my-[20px]">
                <span className="block mb-[5px]">Footer Logo</span>
                <div className="w-[50px] h-[50px] object-fill mb-[10px]">
                  <img src="" alt="Footer Logo" className="w-full h-full" />
                </div>
                <input
                  type="file"
                  name="footer_icon"
                  className="border w-full h-[35px] rounded-[5px] p-2 mb-[10px]"
                />
              </div>
              <div className="w-full my-[20px] relative">
                <span className="block mb-[5px]">Password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full border h-[35px] rounded-[5px] p-2"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[20px] bottom-[10px] cursor-pointer text-[#303640]"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button
                type="submit"
                className="w-[150px] h-[40px] rounded-md text-white bg-[#5351c9] my-[30px]"
              >
                Update
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center p-[10px] items-center gap-[10px] h-[400px]">
            <div className="border border-slate-300 w-[200px] h-[200px] rounded-full overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/e1/66/42/e166425d25a36636707a2e3b295a90ee.jpg"
                alt="Profile Image"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="block text-center">Profile Image</span>
          </div>
        </div>
      </div>
      <div className="mb-[80px] w-[90%] mx-auto border rounded-[10px]">
        <span className="block text-[#303640] bg-[#f8f8f9] rounded-[10px_10px_0_0] h-[60px] p-[15px] box-border font-bold text-[25px] border-b">
          Update Email
        </span>
        <div className="w-full p-[30px]">
          <form method="post">
            <div className="w-full mb-[10px]">
              <span className="block mb-[5px]">Current Email</span>
              <input
                type="email"
                className="w-full border h-[35px] rounded-[5px] p-2"
              />
            </div>
            <div className="w-full mb-[10px]">
              <span className="block mb-[5px]">OTP</span>
              <input
                type="text"
                placeholder="Enter OTP"
                name="userotp"
                className="w-full border h-[35px] rounded-[5px] p-2 mb-[10px]"
              />
              <input
                type="text"
                placeholder="Enter new email"
                name="newemail"
                className="w-full border h-[35px] rounded-[5px] p-2"
              />
            </div>
            <button
              type="button"
              className="w-[150px] h-[40px] rounded-md text-white bg-[#007bff] my-[30px]"
            >
              Get OTP
            </button>
            <button
              type="button"
              className="w-[150px] h-[40px] rounded-md text-white bg-[#5351c9] my-[30px]"
            >
              Update Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
