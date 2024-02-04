import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import MultipleSelect from './dropdown';
import MuiAlert from '@mui/material/Alert';
import { voices } from './voices';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function PicturePage() {
    const [inputVoValue, setInputVoValue] = React.useState("");
    const handleVoChange = (e) => {
        setInputVoValue(e.target.value);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Alert severity="success"><h3 style={{margin: '0', color: 'white'}}>Authorization period is until 12/24/2023</h3></Alert>
            <Stack
                justifyContent="center"
                spacing={2}>
                <Item>
                    <TextField fullWidth id="demo-helper-text-aligned" label="Text" helperText="Please enter Text" variant="standard"/>
                    <Stack direction="row" justifyContent="space-around">
                        <MultipleSelect title="Select the voice" content={voices} inputValue = {inputVoValue} handleChange = {handleVoChange}/>
                    </Stack>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        GENERATE
                    </Button>
                     
                </Item>
            </Stack>
        </Box>
    );
}