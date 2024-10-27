import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IMG_URL } from '../hook/useAnv';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

export default function CustomCard({item}) {
  const navigate = useNavigate()

  const [changeImg, setChangeImg] = React.useState(false)
  function handleImgMouseEnter(){
    setChangeImg(true)
  }
  function handleImgMouseLeave(){
    setChangeImg(false)
    
  }
  return (
    <Card className='cursor-pointer' sx={{ maxWidth: 345 }}>
      <div onClick={() => navigate(`/movie/${item.id}`)} className="w-full h-[300px] relative">
        <CardMedia onMouseEnter={handleImgMouseEnter} onMouseLeave={handleImgMouseLeave} className={`absolute duration-300  w-full ${changeImg ? "left-[-100%]" : "left-0"}`} component="img" alt={item.original_title} sx={{height: 300}} image={`${IMG_URL}${item.poster_path}`}/>
        <CardMedia onMouseEnter={handleImgMouseEnter} onMouseLeave={handleImgMouseLeave} className={`absolute duration-300  w-full ${changeImg ? "right-0" : "right-[-100%]"}`} component="img" alt={item.original_title} sx={{height: 300}} image={`${IMG_URL}${item.backdrop_path}`}/>

      </div>
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          <strong className='text-[20px] '>{item.title}</strong>
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <span className='line-clamp-3'> {item.overview}  </span>
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          <strong className='text-[20px] '>{item.release_date}</strong>
        </Typography>

      </CardContent>
      <CardActions>
        <Button startIcon={<FavoriteBorderIcon/>} size="large">
          Save
        </Button>
        <Button startIcon={<SaveAltIcon/>} size="large">
          Like
        </Button>
        <Button onClick={() => navigate(`/movie/${item.id}`)} startIcon={<MoreHorizIcon/>} size="large">
          More
        </Button>
      </CardActions>
    </Card>
  );
}
