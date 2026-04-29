import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Carousel from './components/Carousel/Carousel';
// import { useState,useEffect } from 'react';
function Home() {
    // const [searchData, setSearchData] = useState([]);

    // useEffect(() => {
    //     fetch("https://itunes.apple.com/search?term=jack+johnson")
    //       .then((response) => response.json())
    //       .then((data) => setSearchData(data.results))
    //       .catch((error) => console.error("Error fetching data:", error));
    //   }, []);


  return (
   <>
  <Navbar />
   <Hero />
   {/* <Carousel/> */}
   </>
  );
}

export default Home;