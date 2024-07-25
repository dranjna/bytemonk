import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PieChartIcon from '@mui/icons-material/PieChart';
import TableChartIcon from '@mui/icons-material/TableChart';

export default function Togglebtn({ onClick, viewMode }) {
  // Determine the next mode based on the current viewMode
  const getNextMode = (currentMode) => {
    switch (currentMode) {
      case 'table':
        return 'chart';
      case 'chart':
        return 'both';
      case 'both':
      default:
        return 'table';
    }
  };

  // Handle the button click
  const handleButtonClick = () => {
    onClick(getNextMode(viewMode));
  };

  return (
    <ToggleButton
      value={viewMode}
      onClick={handleButtonClick}
      variant="contained"
    >
      {viewMode === 'table' && (
        <>
          View Chart
          {/* <PieChartIcon /> */}
        </>
      )}
      {viewMode === 'chart' && (
        <>
          View Both
          {/* <PieChartIcon /> */}
        </>
      )}
      {viewMode === 'both' && (
        <>
          View Table
          {/* <TableChartIcon /> */}
        </>
      )}
    </ToggleButton>
  );
}
