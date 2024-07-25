import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

export default function Selectcategory({ selectedCategory, onCategoryChange }) {
  const reports = useSelector((state) => state.reports);

  // Extract unique categories from reports
  const categories = Array.from(new Set(reports.map((report) => report.category)));

  // Add "All" as a default option
  const allCategories = ['All', ...categories];

  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Category"
          onChange={handleChange}
        >
          {allCategories.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
