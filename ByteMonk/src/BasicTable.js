import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportsRequest } from './Redux/actions/reportAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableChartIcon from '@mui/icons-material/TableChart';

export default function BasicTable({ category }) {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports || []);
  const loading = useSelector((state) => state.loading);
  console.log("Loading----->",loading)
  const error = useSelector((state) => state.reports.error);

  useEffect(() => {
    dispatch(fetchReportsRequest());
  }, [dispatch]);

  const filteredReports = category && category !== 'All'
    ? reports.filter((report) => report.category === category)
    : reports;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Timestamp</TableCell>
            <TableCell align="right">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredReports.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">No data available</TableCell>
            </TableRow>
          ) : (
            filteredReports.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right">{row.formattedDate}</TableCell>
                <TableCell align="right">{row.ipAddress}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
