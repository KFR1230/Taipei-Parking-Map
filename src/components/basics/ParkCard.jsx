import Button from '@mui/material/Button';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const ParkCard = (park) => {
  const { name, availablecar } = park.park;
  const { onClick } = park;
  return (
    <>
      <Card sx={{ maxWidth: 350 }} className="card-container">
        <CardActionArea className="card-wrapper">
          <CardContent className="card-Content">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="card-name"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-info"
            >
              剩餘車位：{availablecar}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          variant="contained"
          endIcon={<TravelExploreIcon />}
          className="card-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.(name);
          }}
        >
          前往
        </Button>
      </Card>
    </>
  );
};

export default ParkCard;
