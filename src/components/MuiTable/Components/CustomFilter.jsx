import React from 'react';
import PropTypes from "prop-types";
import Select from "react-select";

const CustomFilter = ({column, filterList, options, index, onChange}) => {

    const val = [];
    filterList[index].forEach(x => {
        const obj = {
            index : options.findIndex(el=> el === x),
            value : x,
            label: x
        }
        val.push(obj)
    })

    function handleChange(event) {
        filterList[index] = event.map(x => x.label);
        onChange(filterList[index], index, column);
    }

    return (
        <Select
            isMulti
            menuPosition={'fixed'}
            placeholder={column.label}
            onChange={handleChange}
            value={val}
            options={options.map((item, index) => ({
                key: index,
                value: item,
                label: item,
            }))}
        />
    );
};

CustomFilter.propTypes = {
    column: PropTypes.object,
    filterList: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func,
    index: Promise.number
};

export default CustomFilter;