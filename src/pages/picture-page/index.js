import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import BasicModal from './modal';
import MuiAlert from '@mui/material/Alert';
// import axios from 'axios';
// import FileSaver from "file-saver";
import { saveAs } from "file-saver";

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
const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PicturePage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [url_data, setData] = React.useState({
        images: ""
    });
    const [prompt, setPrompt] = React.useState("");
    const [n_prompt, setN_prompt] = React.useState("");
    // "handsome man, black suit, yellow tie, white shirt, shining skin, black hair, correct eye, cinematic"
    const handleClick = () => {
        fetch("/data", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({prompt: prompt, n_prompt: n_prompt})
        }).then((res) =>
                res.json().then((data) => {
                    setData({
                        images: data.output.images
                    });
                    console.log(data.output.images);
                })
            );
        // console.log(prompt);
    }
    const handlDownload = () => {
        const url = url_data.images[0]; // Replace with your file URL
        console.log('-----------', url, url_data)
        const fileName = 'example-file.jpg'; // Replace with your desired file name
        saveAs(url, fileName);
    }
    
    console.log(url_data);
    return (
        <Box sx={{ width: '100%' }}>
            <Alert severity="success"><h3 style={{ margin: '0', color: 'white' }}>Authorization period is until 12/24/2023</h3></Alert>
            <Stack
                justifyContent="center"
                spacing={2}>
                <Item>
                    <TextField fullWidth id="demo-helper-text-aligned"
                        label="Prompt" helperText="Please enter prompt"
                        variant="standard"
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <TextField fullWidth id="demo-helper-text-aligned"
                        label="NegativePrompt" helperText="Please enter negative prompt"
                        variant="standard"
                        onChange={(e) => setN_prompt(e.target.value)}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                        GENERATE
                    </Button>
                </Item>
                <Item1>
                    <Box sx={{ margin: '20px 30vw 20px 30vw' }}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image={url_data.images}
                                title="green iguana"
                            />
                            <CardActions>
                                <Button size="small" onClick={handleOpen}>Show in detail</Button>
                                <BasicModal open={open} close={handleClose} url={url_data.images} handleDownload = {handlDownload} />
                            </CardActions>
                        </Card>
                    </Box>
                </Item1>
            </Stack>
        </Box>
    );
}