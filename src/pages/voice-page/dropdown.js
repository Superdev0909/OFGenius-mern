import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxwidth: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
export default function MultipleSelectChip(props) {
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-chip-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-chip-label"
                    id="demo-chip"
                    value={props.inputValue}
                    onChange={props.handleChange}
                    input={<OutlinedInput id="select-multi-chip" label="Chip" />}
                    MenuProps={MenuProps}
                    sx={{width: "450px"}}
                >
                        {props.content.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item.name}
                            >
                            {item.name} &nbsp;&nbsp;&nbsp;&nbsp;<p style={{borderRadius: "5px", backgroundColor: "lightgrey", color: "black", padding: "5px"}}>{item.labels}</p>
                            </MenuItem>
                        ))}
                        
                </Select>
            </FormControl>
        </div>
    );
}