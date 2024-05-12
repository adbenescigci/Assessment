import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const textFieldTextRender = (value, tableMeta, updateValue) => (
    <FormControlLabel
        control={<TextField value={value || ''} type='number' />}
        onChange={event => updateValue(event.target.value)}
    />
)
export default textFieldTextRender;
