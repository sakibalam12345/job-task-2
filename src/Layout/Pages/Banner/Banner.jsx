import './Banner.css'
import { ImCheckmark } from "react-icons/im";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from 'react';


const Banner = () => {

    const [studentCount, setStudentCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (studentCount < 20) {
                setStudentCount(studentCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 50); 

        return () => clearInterval(interval);
    }, [studentCount]);



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
                    <div className='lg:flex md:flex  lg:justify-between md:justify-between lg:gap-20 md:gap-16 gap-2  lg:items-center md:items-center items-center pl-10'>

                   
                    <div>
                    <p className='text-white  font-poppins text-base uppercase lg:pb-4 md:pb-4 pb-1 lg:text-left md:text-left text-center'>PASS YOUR HOME  OFFICE <span className="lg:hidden md:hidden block"><br /></span> APPROVED TESTS</p>
                    <h1 className='text-white font-poppins lg:text-6xl md:text-6xl text-3xl lg:items-start md:items-start items-center lg:text-left md:text-left text-center font-bold pb-4'>
                 <span className='lg:pb-4 md:pb-4 pb-1'>99% PASS</span>    <br /> <span className='lg:pb-4 md:pb-4 pb-1'> RATE</span> <br />
          
                    <div data-aos="fade-up" data-aos-duration="3000">  
                     <p className='text-white font-poppins lg:text-7xl md:text-6xl text-4xl font-bold  '> FIRST TIME</p>
                       </div>   </h1>
                       <div>
                       <div >
                       <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="300pt" 
     height="35.000000pt" viewBox="0 0 300.000000 35.000000"
     preserveAspectRatio="xMidYMid meet"
     className="responsive-svg">
    <metadata>
    </metadata>
    <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)"
       fill="#DB4746" stroke="none">
        <path d="M735 260 c-545 -26 -705 -38 -705 -51 0 -11 16 -11 176 1 393 28 749
               40 1277 40 485 0 1156 -16 1232 -29 22 -4 -257 -12 -620 -19 -792 -15 -1658
               -50 -1687 -68 -24 -15 16 -18 159 -12 203 8 830 7 1133 -1 179 -6 204 -8 105
               -9 -192 -3 -529 -36 -549 -53 -18 -16 1 -19 55 -9 132 24 391 41 762 50 220 6
               403 13 406 15 2 3 2 7 0 9 -7 7 -947 24 -1249 22 -162 -1 -270 2 -240 5 57 7
               608 22 1490 40 283 6 517 13 519 15 10 10 -11 13 -144 23 -77 6 -201 16 -275
               22 -167 13 -1611 20 -1845 9z"/>
    </g>
</svg>
                    </div>
                       </div>
                   <div className='lg:ml-0 md:ml-0 ml-5 '>
                   <div className='group '>
                                        <p className='text-white font-poppins text-base flex items-center gap-4  group-hover:text-[#DB4746]'>
                                            <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700  ease-in-out' /> Unlimited online training until you pass
                      </p></div>

                    <div className='group'>
                     <p className='text-white font-poppins text-base flex items-center gap-4  group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                      <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> Suitable for British citizenship
                         </p>
                      </div>
                        <div className='group'>
                       <p className='text-white font-poppins text-base flex items-center gap-4  group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                         <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> Professional English Teachers
                         </p>
                       </div>
                         <div className='group'>
                         <p className='text-white font-poppins text-base flex items-center gap-4  group-hover:text-[#DB4746] transition-colors duration-700 ease-in-out'>
                        <ImCheckmark className='text-[#DB4746] h-8 w-6 group-hover:text-white transition-colors duration-700 ease-in-out' /> All training materials are included
                        </p>
                       </div>
                    </div>  
                    <button className=' lg:py-4 md:py-4 py-2  lg:px-16 md:px-14 px-8 lg:mt-6 md:mt-6 mt-1 lg:ml-0 md:ml-0 ml-14 bg-white rounded-full transition-transform duration-300 ease-in-out transform hover:translate-y-1 '>
                      <p className='text-lg font-poppins font-extrabold text-[#2F346F] flex items-center gap-4'>Get Information <FaCircleChevronRight></FaCircleChevronRight></p>  
                    </button>
                    
                    </div>
                    {/* right side div */}
                    <div className='relative'>
                        <div>
                            <img className='lg:w-full md:w-3/4  lg:mt-36 md:mt-36 mt-[70px] lg:h-[480px] md:h-[300px] h-[160px] lg:ml-0 md:ml-0 ml-24' src="https://i.ibb.co/wgfy8Ch/smiling-lady-b1-png-1-1-png.webp" alt="" />
                        </div>
                        <div>
                            <img  className='absolute lg:top-40 md:top-3 -top-16 lg:-left-16 md:left-40 left-56 md:z-10 z-10  lg:h-[180px] md:h-[100px] h-[50px]' src="https://i.ibb.co/SsNLfvF/10years2-1-png-1.webp" alt="" />
                        </div>
     
                       
                        <div className='bg-white lg:px-12 md:px-10 px-3  lg:py-4 md:py-3 py-1 rounded-2xl absolute  lg:-right-10 right-20 lg:top-20 md:top-16 -top-10' data-aos="fade-down" data-aos-duration="3000">
                            <p className='text-[#2F346F] font-poppins text-base font-bold uppercase'>
                         <span className='lg:text-6xl md:text-6xl text-4xl font-normal lg:pl-6 md:pl-4 pl-10'>{studentCount}K</span> <br /> STUDENTS PASSED! 
                            </p> 
                       
                        </div>
                        
                    </div>

                    </div>
                    {/* end */}
                 
                </div>
           
        </div>
        <div className='fixed lg:bottom-6 md:bottom-2 bottom-2 lg:right-4 md:right-0 right-0 z-50 w-full sm:w-full md:w-full lg:w-auto'>
            <button className='bg-[#25d366] w-full lg:w-auto lg:py-4 md:py-3 py-2 lg:px-12  md:w-full hover:bg-sky-700'>
                <p className='font-poppins text-base flex items-center justify-center gap-2 text-white'>
                    WhatsApp us <FaWhatsapp />
                </p>
            </button>
        </div>

        </div>
        
    );
};

export default Banner;