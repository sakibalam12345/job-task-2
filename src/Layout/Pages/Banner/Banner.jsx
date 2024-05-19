import './Banner.css'
import { ImCheckmark } from "react-icons/im";

const Banner = () => {
    return (


<div>
    <div className='banner-container background-overlay '>
    

        <div className='triangle '> </div> 
       
        
        <div className='max-w-[1700px] mx-auto background-image mt-4 '> 
       

            <div className="overlay ">
            
                
          
            
            </div>
            
           
           
        </div>


        </div>
        <div className='relative -top-80 z-50'>
        <div className='max-w-6xl mx-auto '>
                    {/* left side div */}
                    <div className='flex justify-between  items-center '>

                   
                    <div>
                    <p className='text-white  font-poppins text-base uppercase'>PASS YOUR HOME OFFICE APPROVED TESTS</p>
                    <h1 className='text-white font-poppins text-6xl font-bold'>
                    99% PASS <br /> RATE <br />

                   <p className='text-white font-poppins text-7xl font-bold'>FIRST TIME</p>  </h1>
                   <div className=''>
                    <p className='text-white font-poppins text-base flex items-center gap-4'><ImCheckmark className='text-[#DB4746] h-8 w-6 '></ImCheckmark>Unlimited online training until you pass</p>
                    <p className='text-white font-poppins text-base flex items-center gap-4'><ImCheckmark className='text-[#DB4746] h-8 w-6 '></ImCheckmark>Suitable for British citizenship</p>
                    <p className='text-white font-poppins text-base flex items-center gap-4'><ImCheckmark className='text-[#DB4746] h-8 w-6 '></ImCheckmark>Professional English Teachers</p>
                    <p className='text-white font-poppins text-base flex items-center gap-4'><ImCheckmark className='text-[#DB4746] h-8 w-6 '></ImCheckmark>All training materials are included</p>
                    </div>  
                    <button className=' py-4  px-20 mt-24 bg-white rounded-full'>
                      <p className='text-base font-poppins font-extrabold text-[#2F346F]'>Get Information</p>  
                    </button>
                    
                    </div>
                    {/* right side div */}
                    <div>
                   <h2 className='text-white font-bold text-3xl'>image and other stuff</h2>
                    </div>

                    </div>
                    {/* end */}
                 
                </div>
           
        </div>

        </div>
        
    );
};

export default Banner;