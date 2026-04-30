import Navbar from './components/Navbar/Navbar';
import PropTypes from 'prop-types';
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/CardComponent';
import axios, { all } from 'axios';
import {Grid,Container,Box,Tabs ,Tab  } from '@mui/material';
import styles from './Home.module.css';
import Button from "./components/Button/Button";
import Carousel from './components/Carousel/Carousel';
import { useState,useEffect } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [value, setValue] = useState(0);
    const [genres, setGenres] = useState([{
    key: "all",
    label: "All"
    }]);
    const [filteredSongs, setFilteredSongs] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedGenre = genres[newValue].key;

  if (selectedGenre === "all") {
    setFilteredSongs(allSongs);
  } else {
    const filtered = allSongs.filter(
      (song) => song.genre.key === selectedGenre
    );
    setFilteredSongs(filtered);
  }
  };
    

useEffect(() => {
    const fetchData = async () => {
        try {
        const topRes = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
        const newRes = await axios.get("https://qtify-backend.labs.crio.do/albums/new");
        const allRes = await axios.get("https://qtify-backend.labs.crio.do/songs");
        const genresRes = await axios.get("https://qtify-backend.labs.crio.do/genres");

        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);
        setAllSongs(allRes.data);
        setGenres([
        { key: "all", label: "All" },
        ...genresRes.data.data
        ]);
        
        } catch (err) {
        console.error(err);
        }
    };
   fetchData();
    setFilteredSongs(allSongs);
  


}, []);
useEffect(() => {
     setFilteredSongs(allSongs);
}, [allSongs]);
    
const [topToggle, setTopToggle] = useState(false);
const [newToggle, setNewToggle] = useState(false);


       
    


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
            {topToggle ? (
        <Grid container spacing={2}>
            {topAlbums.map((item) => (  
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CardComponent data={item} />
                </Grid>
            ))}
            </Grid>
      ) : ( 
         <Carousel data={topAlbums} maxWidth="xl"/>
        )}
       
       
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
             {newToggle ? (
        <Grid container spacing={2}>
            {newAlbums.map((item) => (  
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CardComponent data={item} />
                </Grid>
            ))}
            </Grid>
      ) : ( 
         <Carousel data={newAlbums} maxWidth="xl"/>
        )}
       
    </Box>
    <Box component="section" className={styles.section}
    sx={{ px: { xs: 2, md: 4, lg: 6 } }}>

    <Box className={styles.box_tab}>
        <h3>Songs</h3>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
            {genres?.map((genre,index) => (
                <Tab label={genre.label} {...a11yProps(genre.index+1)}   
                 key={genre.key} className={styles.tab}
                 name={
                    genre.key
                 }/>
            ))}
        </Tabs>
        </Box>
    </Box>
            {genres?.map((genre,index) => (
                <CustomTabPanel  key={genre.key}
                    value={value}
                    index={index} >
                    <Carousel data={filteredSongs} maxWidth="xl"/>
                </CustomTabPanel>
            ))}

    </Box>
   {/* <CardComponent /> */}
    </Container>
   </div>
  );
}

export default Home;