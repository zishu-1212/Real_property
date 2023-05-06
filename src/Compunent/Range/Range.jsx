import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [values, setValues] = React.useState([20, 37]);

  const handleChange = (events, newValues) => {
    setValues(newValues);
  };

  return (
    <Box sx={{ width: 200 }}>
<Typography variant='p'>
  1200k
  </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}