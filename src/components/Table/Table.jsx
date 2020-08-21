import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    minHeight: 450
  },
});

function TopListTable({ topTenVictims }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="top victims table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Countries</StyledTableCell>
            <StyledTableCell align="right">Confirmed</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
            <StyledTableCell align="right">Active</StyledTableCell>
            <StyledTableCell align="right">Continent</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topTenVictims.map((country) => (
            <StyledTableRow key={country.country}>
              <StyledTableCell component="th" scope="row">
                {country.country}
              </StyledTableCell>
              <StyledTableCell align="right">
                {numeral(country.cases).format("0.00a")}
              </StyledTableCell>
              <StyledTableCell align="right">
                {numeral(country.recovered).format("0.00a")}
              </StyledTableCell>
              <StyledTableCell align="right">
                {numeral(country.deaths).format("0.00a")}
              </StyledTableCell>
              <StyledTableCell align="right">
                {numeral(country.active).format("0.00a")}
              </StyledTableCell>
              <StyledTableCell align="right">
                {country.continent}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TopListTable;