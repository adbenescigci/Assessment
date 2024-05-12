"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import MuiTable from "@/components/MuiTable";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Footer from "./components/Footer";
import getTableHeaders from "./utils/headerVariables";

import "./styles/SampleTableView.css";

const SampleTableView = (props) => {
  const {
    showData,
    selectedCourse,
    loading,
    handleAddPoolDialogShow,
    handleActivePoolSwitch,
    myPoolCheck,
    handleMyPoolSwitch,
    activePoolCheck,
  } = props;
  const [sortOrder, setSortOrder] = useState({});
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const _head = getTableHeaders(activePoolCheck);
    setTableHeaders(_head);
  }, [activePoolCheck]);

  const toolbar = () => {
    return (
      <div style={{ display: "contents" }}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              size="small"
              checked={myPoolCheck}
              onChange={handleMyPoolSwitch}
              inputProps={{ "aria-label": "my-pools" }}
            />
          }
          label="My Pools"
        />
      </div>
    );
  };
  return (
    <Grid
      id={loading ? "loading" : "non-loading"}
      item
      xs={12}
      className="table-view-body"
    >
      <MuiTable
        tableColumns={tableHeaders}
        tableData={showData}
        noteTable
        rowsPerPage={10}
        customOption={{
          customToolbar: toolbar,
          onColumnSortChange: (changedColumn, direction) => {
            setSortOrder({ name: changedColumn, direction });
          },
          sortOrder: sortOrder,
          extraFunc: (e) => handleActivePoolSwitch(null, e),
          customFooter: (
            count,
            page,
            rowsPerPage,
            changeRowsPerPage,
            changePage,
            textLabels,
          ) => {
            return (
              <Footer
                count={count}
                disabled={!selectedCourse}
                page={page}
                rowsPerPage={rowsPerPage}
                changeRowsPerPage={changeRowsPerPage}
                changePage={changePage}
                textLabels={textLabels}
                addNewPool={handleAddPoolDialogShow}
              />
            );
          },
          textLabels: {
            body: {
              noMatch: !selectedCourse
                ? "Please select a course"
                : "No data has been found for the selected parameters!",
            },
          },
        }}
      />
    </Grid>
  );
};

SampleTableView.propTypes = {
  showData: PropTypes.array.isRequired,
  handleAddPoolDialogShow: PropTypes.func.isRequired,
  selectedCourse: PropTypes.number.isRequired,
  myPoolCheck: PropTypes.bool.isRequired,
  handleMyPoolSwitch: PropTypes.func.isRequired,
  handleActivePoolSwitch: PropTypes.func,
  activePoolCheck: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SampleTableView;
