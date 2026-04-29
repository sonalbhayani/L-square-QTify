import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import styles from './CardComponent.module.css';

export default function CardComponent({data}) {
  const { title, image, follows } = data;
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (<>
    <Card sx={{ maxWidth: 159 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Chip label={`${follows} Follows `} variant="outlined" onClick={handleClick} className={styles.chip}/>
        </Typography>
      </CardContent>

    </Card>
            {title}
            </>
  );
}
