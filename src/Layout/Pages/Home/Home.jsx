import Banner from "../Banner/Banner";
import Customerreview from "../Customerreview/Customerreview";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Customerreview></Customerreview>
        </div>
    );
};

export default Home;