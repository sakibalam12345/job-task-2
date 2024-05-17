import { IoCall } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-[#262B62] h-12 flex justify-around">
            
            <div className="flex gap-3 items-center justify-center ">
                <IoCall className="text-red-500 text-lg hover:text-white"></IoCall>
                <p className="text-white font-poppins text-base hover:text-red-500">01158376502 | 07913256387</p>
            </div>
            <div className="flex gap-2 items-center justify-center text-white text-lg font-medium  hover:text-red-500">
                <button className="flex justify-center items-center gap-2 px-4 border-l-2 border-blue-950 h-full" >
                <FaRegUserCircle ></FaRegUserCircle>
             <p >LOGIN</p>
                </button>
            
            
            </div>
            
        </div>
    );
};

export default Navbar;