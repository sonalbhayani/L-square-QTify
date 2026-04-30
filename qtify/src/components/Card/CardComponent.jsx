import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import styles from './CardComponent.module.css';

export default function CardComponent({data}) {
  const { title, image, follows,likes } = data;
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Card sx={{ maxWidth: 159 }} className='card'>
      <CardMedia
        sx={{ height: 140 ,width: 159}}
        image={image}
        title={title}
      />
      <CardContent  sx={{ height: 70}}>
        <Typography gutterBottom variant="h5" component="div">
          {follows && (<Chip label={`${follows} Follows `} variant="outlined" onClick={handleClick} className={styles.chip}/>)}
          {likes && (<Chip label={`${likes} Likes `} variant="outlined" onClick={handleClick} className={styles.chip}/>)}
        </Typography>
        <Typography variant="body2">
          {title}
        </Typography>
      </CardContent>
      
    </Card>
            
  );
}
