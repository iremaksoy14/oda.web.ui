import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button } from 'shards-react';
import TableHead from '@mui/material/TableHead';
function createData(ID, IP, MAC,StartDate,LastOnline,Status,Assigned,Transactions,Transactions2) {
    return {ID, IP, MAC,StartDate,LastOnline,Status,Assigned,Transactions,Transactions2 };
  }

const rows = [
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),
  createData('#353','192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "Online" ,<Button>Assign </Button>),




 

 

  
];

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  

function ControllinoStable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>      
    <TableContainer component={Paper}  style={{width: 576,height: 300,overflowX:'hidden'}}>
    <Table  aria-label="custom pagination table" style={{ width:576,height: 300}}>
        
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"><b>{row.ID}</b></TableCell>
              <TableCell align="left"><b>{row.IP}</b></TableCell>
              <TableCell align="left">{row.MAC}</TableCell>
              <TableCell align="left">{row.StartDate}</TableCell>
              <TableCell align="left">{row.LastOnline}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align="left">{row.Assigned}</TableCell>
              <TableCell align="left">{row.Transactions}</TableCell>               
              <TableCell align="left">{row.Transactions2}</TableCell>    
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination style={{overflow: "hidden"}}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </TableContainer>
      </div>
    )
}

export default ControllinoStable