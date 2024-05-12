"use client";
import React from "react";
import PropTypes from "prop-types";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import MuiTablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";

class Footer extends React.Component {
  handleRowChange = (event) => {
    this.props.changeRowsPerPage(event.target.value);
  };
  handlePageChange = (_, page) => {
    this.props.changePage(page);
  };

  render() {
    const {
      count,
      textLabels,
      rowsPerPage,
      page,
      disabled = false,
    } = this.props;
    const footerStyle = {
      display: "flex",
      justifyContent: "space-between",
      padding: "0px 24px 0px 24px",
    };
    return (
      <TableFooter>
        <TableRow>
          <TableCell style={footerStyle} colSpan={1000}>
            <div style={{ margin: 10 }}>
              <Button disabled={disabled} onClick={this.props.addNewPool}>
                Add New{" "}
              </Button>
            </div>
            <MuiTablePagination
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={textLabels.rowsPerPage}
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} ${textLabels.displayRows} ${count}`
              }
              backIconButtonProps={{
                "aria-label": textLabels.previous,
              }}
              nextIconButtonProps={{
                "aria-label": textLabels.next,
              }}
              rowsPerPageOptions={[10, 25, 50, 100, 250]}
              onPageChange={this.handlePageChange}
              onRowsPerPageChange={this.handleRowChange}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  }
}

Footer.propTypes = {
  changeRowsPerPage: PropTypes.func,
  changePage: PropTypes.func,
  count: PropTypes.number,
  textLabels: PropTypes.object,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  addNewPool: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Footer;
