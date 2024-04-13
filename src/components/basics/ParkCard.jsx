import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useEffect, useState } from 'react';

const ParkCard = (park) => {
  const { name, availablecar } = park.park;
  const { onClick } = park;
  const [isavailablecar, setIsAvailablecar] = useState(false);

  // const handlermoveToPosition = useCallback(() => {
  //   map.setView([lat, lng], 16);
  // },[]);

  useEffect(() => {
    function isAvailablecarNum() {
      if (availablecar <= 0) {
        setIsAvailablecar(false);
        return;
      }
      setIsAvailablecar(true);
    }
    isAvailablecarNum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [park]);

  return (
    <>
      <Card sx={{ maxWidth: 350 }} className="card-container">
        <CardMedia
          className="card-wrapper"
          data-available={isavailablecar}
          // onClick={handlermoveToPosition}
        >
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
        </CardMedia>
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
