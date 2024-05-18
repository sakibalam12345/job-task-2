import { IoCall } from "react-icons/io5";
import { FaRegUserCircle,FaCaretDown } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <div className="bg-[#262B62]">
            <div className="max-w-6xl mx-auto h-12 flex justify-between">
            <div className="flex gap-3 items-center justify-center ">
                <IoCall className="text-red-500 text-lg hover:text-white"></IoCall>
                <p className="text-white font-poppins text-base hover:text-red-500">01158376502 | 07913256387</p>
            </div>
            <div className="flex gap-4 items-center justify-center text-white text-lg font-medium  hover:text-red-500">
                <button className="flex justify-center items-center gap-3 px-4 border-l-2 border-blue-950 h-full" >
                <FaRegUserCircle ></FaRegUserCircle>
             <p >LOGIN</p>
                </button>
            </div>
            </div>
            </div>
           

            <div className="bg-white pt-3 max-w-6xl mx-auto flex gap-16 items-center">
                
                    <div>
                    <img className="h-16" src="https://i.ibb.co/71qKhc1/Fast-Track-Training-1.webp" alt="" />
                    </div>
                    <div className="flex justify-between gap-16 font-bold text-sm font-poppins">

                   <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                     `${
                        isActive 
                        ? "text-[#9B9797]"
                        : isPending
                        ? "pending"
                        : ""

                     } hover:text-[#9B9797]` 
                    }
                  >
                   HOME
                  </NavLink>
                   <NavLink
                    to={'/guarantees'}
                    className={({ isActive, isPending }) =>
                        `${
                            isActive 
                            ? "text-[#9B9797]"
                            : isPending
                            ? "pending"
                            : ""
    
                         } hover:text-[#9B9797]`
                    } 
                  >
                   GUARANTEES
                  </NavLink>
                   <NavLink
                    to={'/ourcourses'}
                    className={({ isActive, isPending }) =>
                        `${
                            isActive 
                            ? "text-[#9B9797]"
                            : isPending
                            ? "pending"
                            : ""
    
                         } hover:text-[#9B9797]`
                    }
                  >
                   <p className="flex items-center justify-center gap-2">OUR COURSES <FaCaretDown></FaCaretDown></p> 
                  </NavLink>
                   <NavLink
                    to={'/aboutus'}
                    className={({ isActive, isPending }) =>
                        `${
                            isActive 
                            ? "text-[#9B9797]"
                            : isPending
                            ? "pending"
                            : ""
    
                         } hover:text-[#9B9797]`
                    }
                  >
                   ABOUT US
                  </NavLink>
                   <NavLink
                    to={'/testimonials'}
                    className={({ isActive, isPending }) =>
                        `${
                            isActive 
                            ? "text-[#9B9797]"
                            : isPending
                            ? "pending"
                            : ""
    
                         } hover:text-[#9B9797]`
                    }
                  >
                   TESTIMONIALS
                  </NavLink>
                   <NavLink
                    to={'/contactus'}
                    className={({ isActive, isPending }) =>
                        `${
                            isActive 
                            ? "text-[#9B9797]"
                            : isPending
                            ? "pending"
                            : ""
    
                         } hover:text-[#9B9797]`
                    }
                  >
                   CONTACT US
                  </NavLink>
                    </div>
             
              
                </div>
               
            </div>
            
           
            
        
    );
};

export default Navbar;