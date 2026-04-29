import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/CardComponent';
import axios from 'axios';
import {Grid,Container,Box } from '@mui/material';
import styles from './Home.module.css';
import Button from "./components/Button/Button";


// import Carousel from './components/Carousel/Carousel';
import { useState,useEffect } from 'react';
function Home() {
    const [searchData, setSearchData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const visibleData = toggle ? searchData : searchData.slice(0, 8);
    useEffect(() => {
       const fetchData = async () => {  
        try {
            const response = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
            setSearchData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }           
      }
       fetchData();    
    },[]);   
       
    


  return (
   <div className={styles.home}>
  <Navbar />
   <Hero />
   <Container maxWidth="xl">
   <Box component="section" className={styles.section}
     sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Container className={styles.box}>
       <h3 className={styles.h3}>Top Albums</h3>
        <Button
            onClick={() => setToggle((prev) => !prev)}
            text={toggle ? "Collapse" : "Show All"}
            className={styles.button}
        />
</Container>

       
        <Grid container spacing={2}>
            {visibleData.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CardComponent data={item} />
                </Grid>
            ))}
            </Grid>
    </Box>
   </Container>
   {/* <Carousel/> */}
   {/* <CardComponent /> */}
   </div>
  );
}

export default Home;