"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Checkbox, FormControlLabel } from "@mui/material";
import Footer from "./components/Footer";
import MuiTable from "@/components/MuiTable";
import getTableHeaders from "./utils/headerVariables";

const SampleTableView = (props) => {
  const {
    showData,
    selectedCourse,
    loading,
    handleAddPoolDialogShow,
    myPoolCheck,
    handleMyPoolSwitch,
  } = props;
  const [sortOrder, setSortOrder] = useState({});
  const [tableHeaders, setTableHeaders] = useState([]);
  const [activePoolCheck, setActivePoolCheck] = useState(true);

  function handleActivePoolSwitch(event, extra = null) {
    if (event) return setActivePoolCheck(event.target.checked);
    if (extra) setActivePoolCheck(extra?.[9]?.[0] === "Yes");
  }

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
      suppressHydrationWarning={true}
      id={loading ? "loading" : "non-loading"}
      item
      xs={12}
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
