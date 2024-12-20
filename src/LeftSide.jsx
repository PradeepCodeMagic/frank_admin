import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsBasket, BsSpeedometer2 } from "react-icons/bs";
import { CiDroplet, CiLogout } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { adminContext } from "./Context/Context";

function LeftSide() {
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [category, setCategory] = useState(false);
  const [product, setProduct] = useState(false); // Added for product collapsible
  const [productCategory, setProductCategory] = useState(false);

  let {navVisible}=useContext(adminContext)

 

  return (
   <div className="  HeightFixed ">
    <div className="w-full bg-[#212631] min-h-[100vh]">
      <Link to="/dashboard">
        <div className="p-[16px] text-center text-white text-[24px] border-bottom cursor-pointer">
          Frank and Oak
        </div>
      </Link>

      <ul className="list-none w-auto m-[8px] text-[16px] text-white sideNav">
        <NavItem to="/dashboard" icon={<BsSpeedometer2 />} label={!navVisible ? "Dashboard" : ""}  isActive />
        <NavItem to="/dashboard/profile" icon={<GoGear />}  label={!navVisible ? "Profile" : ""} />

       
        
        <Collapsible
        
        title={!navVisible ? "Size" : ""}
         
          icon={<MdOutlineTouchApp  />}
          
          isOpen={size}
          setIsOpen={setSize}
          links={[
            { label: "Size Details", to: "/dashboard/size/add-sizes" },
            { label: "View Sizes", to: "/dashboard/size/view-sizes" },
          ]}
        />
        
        <Collapsible
          
          title={!navVisible ? "Color" : ""}
          icon={<CiDroplet />}
          isOpen={color}
          setIsOpen={setColor}
          links={[
            { label: "Add Color", to: "/dashboard/color/add-colors" },
            { label: "View Colors", to: "/dashboard/color/view-colors" },
          ]}
        />
        
        <Collapsible
          
          title={!navVisible ? "Product" : ""}
          icon={<BsBasket />}
          isOpen={product}
          setIsOpen={setProduct}
          links={[
            { label: "Add Product", to: "/dashboard/products/add-product" },
            { label: "View Products", to: "/dashboard/products/view-product" },
          ]}
        />

        <Collapsible
         title={!navVisible ? "Parent Category" : ""}
          
          icon={<ImParagraphLeft />}
          isOpen={category}
          setIsOpen={setCategory}
          links={[
            { label: "Add Category", to: "/dashboard/category/add-category" },
            { label: "View Category", to: "/dashboard/category/view-category" },
          ]}
        />
        
        <Collapsible
        title={!navVisible ? "Product Category" : ""}
          
          icon={<LiaBabyCarriageSolid />}
          isOpen={productCategory}
          setIsOpen={setProductCategory}
          links={[
            { label: "Add Product Category", to: "/dashboard/products/add-category" },
            { label: "View Product Category", to: "/dashboard/products/view-category" },
          ]}
        />

      
      </ul>

      <div className="flex justify-end border-up box-border footer">
        <Link to={"/"}>
        <CiLogout className="text-[25px] text-[#ffffff6a] hover:text-[#ffffff9a] mx-[20px] cursor-pointer" />
        </Link>
      </div>
    </div>
   </div>
  );
}

function NavItem({ to, icon, label, isActive }) {
  return (
    <Link to={to}>
      <li
        className={`w-full grid grid-cols-[20%_auto] px-[12px] py-[10px] rounded-[5px] ${
          isActive ? "bg-[#2a303d] text-white" : "hover:text-white hover:bg-[#2a303d]"
        } cursor-pointer mb-[5px] box-border`}
      >
        <span className="text-[#ffffff6a] w-full my-[5px]">{icon}</span>
        <span className="w-full px-2">{label}</span>
      </li>
    </Link>
  );
}

function Collapsible({ title, icon, isOpen, setIsOpen, links }) {
  return (
    <>
      <li
        className="w-full grid grid-cols-[20%_auto_10%] px-[12px] py-[10px] rounded-[5px] hover:bg-[#2a303d] cursor-pointer mb-[5px] box-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="icon">{icon}</span>
        <span className="w-full px-2">{title}</span>
        {isOpen ? (
          <IoIosArrowUp className="m-1 text-[#ffffff6a]" />
        ) : (
          <IoIosArrowDown className="m-1 text-[#ffffff6a]" />
        )}
      </li>
      {isOpen && (
        <ul className="w-[230px] pl-[20px]">
          {links.map((link, idx) => (
            <Link key={idx} to={link.to}>
              <li className="w-full grid grid-cols-[20%_auto] hover:bg-[#2a303d] rounded-[5px] my-[5px] p-[10px]">
                <FaRegCircle className="text-[#ffffff6a] w-full mt-[5px] p-1 text-[14px]" />
                <span>{link.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default LeftSide;
