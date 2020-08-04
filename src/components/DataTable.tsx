import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { data } from '../data/data';

interface RowProps {
  SiteId: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Activity: any[] | any;
}

interface ActivityProps {
  ActDate: string;
  ActType: string;
  ActWho: string;
  ActProgram: string;
}

function Row(props: { row: RowProps }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.SiteId}
        </TableCell>
        <TableCell align="right">{row.Name}</TableCell>
        <TableCell align="right">{row.Address}</TableCell>
        <TableCell align="right">{row.City}</TableCell>
        <TableCell align="right">{row.State}</TableCell>
        <TableCell align="right">{row.Zip}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Activity
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ActDate</TableCell>
                    <TableCell>ActType</TableCell>
                    <TableCell>ActWho</TableCell>
                    <TableCell>ActProgram</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Activity.map((item: any[] | any, index: number) => (
                    <TableRow key={`${row.SiteId}-${index}`}>
                      <TableCell component="th" scope="row">
                        {item.ActDate}
                      </TableCell>
                      <TableCell>{item.ActType}</TableCell>
                      <TableCell>{item.ActWho}</TableCell>
                      <TableCell>{item.ActProgram}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>SiteId</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <Row key={row.SiteId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
