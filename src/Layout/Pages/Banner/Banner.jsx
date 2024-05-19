import './Banner.css'
import { ImCheckmark } from "react-icons/im";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Aos from 'aos';

const Banner = () => {

    const [studentCount, setStudentCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (studentCount < 20) {
                setStudentCount(studentCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust the interval duration as needed

        return () => clearInterval(interval);
    }, [studentCount]);

    useEffect(() => {
        Aos.init(); // Initialize AOS
    }, []);


    return (


<div>
    <div className='banner-container background-overlay '>
        <div className='triangle '> </div>   
        <div className='max-w-[1700px] mx-auto background-image mt-4 '> 
            <div className="overlay ">      
            </div>       
        </div>


        </div>
        <div className='max-w-5xl mx-auto '>
        <div className='absolute top-[160px] z-50'>
       
                    {/* left side div */}
                    <div className='flex justify-between gap-20  items-center pl-10'>

                   
                    <div>
                    <p className='text-white  font-poppins text-base uppercase pb-4'>PASS YOUR HOME OFFICE APPROVED TESTS</p>
                    <h1 className='text-white font-poppins text-6xl font-bold pb-4'>
                 <span className='pb-4'>99% PASS</span>    <br /> <span className='pb-4'> RATE</span> <br />
          
                 <div data-aos="fade-up" data-aos-duration="3000">      <p className='text-white font-poppins text-7xl font-bold pb-14'> FIRST TIME</p>  </div>   </h1>
                   <div className=''>
                   <div className='group'>
                                        <p className='text-white font-poppins text-base flex items-center gap-4 pb-1 group-hover:text-[#DB4746]'>
                                            <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700  ease-in-out' /> Unlimited online training until you pass
                      </p></div>

                    <div className='group'>
                     <p className='text-white font-poppins text-base flex items-center gap-4 pb-1 group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                      <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> Suitable for British citizenship
                         </p>
                      </div>
                        <div className='group'>
                       <p className='text-white font-poppins text-base flex items-center gap-4 pb-1 group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                         <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> Professional English Teachers
                         </p>
                       </div>
                         <div className='group'>
                         <p className='text-white font-poppins text-base flex items-center gap-4 pb-1 group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                        <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> All training materials are included
                        </p>
                       </div>
                    </div>  
                    <button className=' py-4  px-16 mt-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:translate-y-1'>
                      <p className='text-lg font-poppins font-extrabold text-[#2F346F] flex items-center gap-4'>Get Information <FaCircleChevronRight></FaCircleChevronRight></p>  
                    </button>
                    
                    </div>
                    {/* right side div */}
                    <div className='relative'>
                        <div>
                            <img className='w-full  mt-36 h-[480px]' src="https://i.ibb.co/wgfy8Ch/smiling-lady-b1-png-1-1-png.webp" alt="" />
                        </div>
                        <div>
                            <img  className='absolute top-40 -left-16  h-[180px]' src="https://i.ibb.co/SsNLfvF/10years2-1-png-1.webp" alt="" />
                        </div>
     
                       
                        <div className='bg-white px-7 py-4 rounded-2xl absolute  -right-16 top-24' data-aos="fade-down" data-aos-duration="3000">
                            <p className='text-[#2F346F] font-poppins text-base font-bold uppercase'>
                         <span className='text-6xl font-normal pl-4'>{studentCount}K</span> <br /> STUDENTS PASSED! 
                            </p> 
                       
                        </div>
                        
                    </div>

                    </div>
                    {/* end */}
                 
                </div>
           
        </div>

        </div>
        
    );
};

export default Banner;