import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Stack from '@mui/material/Stack';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={props.url} alt='' style={{ width: '630px', height: '600px' }}></img>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Generated Picture Model
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center"> 
          <Button variant="contained" endIcon={<CloudDownloadIcon />} onClick = {props.handleDownload}>
            DownLoad
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}