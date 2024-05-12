import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const styles = {
  iconButton: {},
  iconContainer: {
    marginRight: "24px",
  },
  inverseIcon: {
    transform: "rotate(90deg)",
  },
};

class CustomToolbarSelect extends React.Component {
  handleClickInverseSelection = () => {
    const nextSelectedRows = this.props.displayData.reduce(
      (nextSelectedRows, _, index) => {
        if (
          !this.props.selectedRows.data.find(
            (selectedRow) => selectedRow.index === index,
          )
        ) {
          nextSelectedRows.push(index);
        }

        return nextSelectedRows;
      },
      [],
    );

    this.props.setSelectedRows(nextSelectedRows);
  };

  handleClickDeselectAll = () => {
    this.props.setSelectedRows([]);
  };

  render() {
    return (
      <div className={styles.iconContainer}>
        <Tooltip title={"Deselect All"}>
          <IconButton
            sx={styles.iconButton}
            onClick={this.handleClickDeselectAll}
          >
            <IndeterminateCheckBoxIcon className={styles.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Inverse selection"}>
          <IconButton
            sx={styles.iconButton}
            onClick={this.handleClickInverseSelection}
          >
            <CompareArrowsIcon sx={[styles.inverseIcon]} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

CustomToolbarSelect.propTypes = {
  displayData: PropTypes.array,
  selectedRows: PropTypes.object,
  setSelectedRows: PropTypes.func,
};

export default CustomToolbarSelect;
