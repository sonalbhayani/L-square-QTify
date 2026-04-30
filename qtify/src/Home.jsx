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
    const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const topRes = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
      const newRes = await axios.get("https://qtify-backend.labs.crio.do/albums/new");

      setTopAlbums(topRes.data);
      setNewAlbums(newRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);
const [topToggle, setTopToggle] = useState(false);
const [newToggle, setNewToggle] = useState(false);
const visibleTopAlbums = topToggle ? topAlbums : topAlbums.slice(0, 6);
const visibleNewAlbums = newToggle ? newAlbums : newAlbums.slice(0, 6);
       
    


  return (
   <div className={styles.home}>
  <Navbar />
   <Hero />
   <Container maxWidth="xl" className={styles.container}>
   <Box component="section" className={styles.section}
     sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Container className={styles.box}>
        <h3 >Top Albums</h3>
            <Button
                onClick={() => setTopToggle((prev) => !prev)}
                text={topToggle ? "Collapse" : "Show All"}
            />
            </Container>

       
        <Grid container spacing={2}>
            {visibleTopAlbums.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CardComponent data={item} />
                </Grid>
            ))}
            </Grid>
    </Box>
    <Box component="section" className={styles.section}
     sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Container className={styles.box}>
        <h3 className={styles.h3}>New  Albums</h3>
            <Button
                onClick={() => setNewToggle((prev) => !prev)}
                text={newToggle ? "Collapse" : "Show All"}
                className={styles.button}
            />
            </Container>

       
        <Grid container spacing={2}>
            {visibleNewAlbums.map((item) => (
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