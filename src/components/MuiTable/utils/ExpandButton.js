import React from 'react';
import {IconButton} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from "prop-types";

const ExpandButton = ({
                          areAllRowsExpanded,
                          buttonClass,
                          expandableRowsHeader,
                          expandedRows,
                          iconClass,
                          iconIndeterminateClass,
                          isHeaderCell,
                          onExpand,
                          coloredIcon
                      }) => {
    return (
        <>
            {isHeaderCell && !areAllRowsExpanded() && areAllRowsExpanded && expandedRows.data.length > 0 ? (
                <IconButton
                    onClick={onExpand}
                    style={{padding: 0}}
                    disabled={expandableRowsHeader === false}
                    className={buttonClass}>
                    <RemoveIcon id="expandable-button" className={iconIndeterminateClass}/>
                </IconButton>
            ) : (
                <IconButton
                    style={{color: coloredIcon && "#00acc1", padding: 0}}
                    onClick={onExpand}
                    disabled={expandableRowsHeader === false}
                    className={buttonClass}>
                    <KeyboardArrowRightIcon id="expandable-button" className={iconClass}/>
                </IconButton>
            )}
        </>
    );
};

ExpandButton.propTypes = {
    expandedRows: PropTypes.object,
    buttonClass: PropTypes.string,
    expandableRowsHeader: PropTypes.bool,
    areAllRowsExpanded: PropTypes.func,
    iconClass: PropTypes.string,
    iconIndeterminateClass: PropTypes.string,
    isHeaderCell: PropTypes.bool,
    onExpand: PropTypes.func,
    coloredIcon: PropTypes.bool
};

export default ExpandButton;
