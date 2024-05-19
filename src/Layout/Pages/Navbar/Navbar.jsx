import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaRegUserCircle, FaCaretDown, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="bg-[#262B62]">
                <div className="max-w-5xl mx-auto h-12 flex justify-between">
                    <div className="flex gap-3 items-center justify-center">
                        <div className="group flex items-center gap-1">
                            <IoCall className="text-red-500 text-lg group-hover:text-white transition-colors duration-700 ease-in-out"></IoCall>
                            <p className="text-white font-poppins text-base group-hover:text-red-500 transition-colors duration-700 ease-in-out">01158376502 | 07913256387</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-center text-white text-lg font-medium hover:text-red-500">
                        <button className="flex justify-center items-center gap-3 px-4 border-l-2 border-blue-950 h-full">
                            <FaRegUserCircle></FaRegUserCircle>
                            <p>LOGIN</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-3 max-w-5xl gap-6 mx-auto flex items-center justify-between">
                <div>
                    <img className="h-16" src="https://i.ibb.co/71qKhc1/Fast-Track-Training-1.webp" alt="" />
                </div>
                <div className="hidden lg:flex justify-between gap-12 font-bold text-sm font-poppins">
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to={'/guarantees'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        GUARANTEES
                    </NavLink>
                    <NavLink
                        to={'/ourcourses'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        <p className="flex items-center justify-center gap-2">OUR COURSES <FaCaretDown></FaCaretDown></p>
                    </NavLink>
                    <NavLink
                        to={'/aboutus'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to={'/testimonials'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        TESTIMONIALS
                    </NavLink>
                    <NavLink
                        to={'/contactus'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797]`
                        }
                    >
                        CONTACT US
                    </NavLink>
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="bg-white lg:hidden flex flex-col items-center text-center">
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to={'/guarantees'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        GUARANTEES
                    </NavLink>
                    <NavLink
                        to={'/ourcourses'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        OUR COURSES
                    </NavLink>
                    <NavLink
                        to={'/aboutus'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to={'/testimonials'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        TESTIMONIALS
                    </NavLink>
                    <NavLink
                        to={'/contactus'}
                        className={({ isActive, isPending }) =>
                            `${isActive ? "text-[#9B9797]" : isPending ? "pending" : ""} hover:text-[#9B9797] py-2`
                        }
                        onClick={toggleMenu}
                    >
                        CONTACT US
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
