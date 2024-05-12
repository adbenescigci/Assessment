import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import MuiTablePagination from "@mui/material/TablePagination";

function CustomFooter(props) {
  const {
    count,
    textLabels,
    rowsPerPage,
    page,
    handleAddNew,
    changeRowsPerPage,
    changePage,
    addButtonVisible,
  } = props;

  function handleRowChange(event) {
    changeRowsPerPage(event.target.value);
  }

  function handlePageChange(_, page) {
    changePage(page);
  }

  return (
    <TableFooter>
      <TableRow>
        <TableCell className="question-landing-page-footer" colSpan={1000}>
          {addButtonVisible ? (
            <div className="question-landing-page-footer-button-style">
              <Button onClick={handleAddNew}>Add New</Button>
            </div>
          ) : (
            <div />
          )}
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
            rowsPerPageOptions={[25, 50, 100, 250]}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowChange}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}

CustomFooter.propTypes = {
  count: PropTypes.number,
  textLabels: PropTypes.object,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  handleAddNew: PropTypes.func,
  changeRowsPerPage: PropTypes.func,
  changePage: PropTypes.func,
  addButtonVisible: PropTypes.bool.isRequired,
};

export default CustomFooter;
