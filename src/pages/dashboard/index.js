import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function DashboardDefault() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
        <Item>
          <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <Avatar
                alt=""
                src={require("../../assets/images/16.jpg")}
                sx={{ width: 100, height: 100 }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={5} justifyContent="left" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <BusinessRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Company"
                sx={{ width: '20vw' }}
              />
            </div>
            <div style={{ marginTop: "20px " }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Username"
                sx={{ width: '20vw' }}
              />
            </div>
            <div style={{ marginTop: "20px " }}>
              <EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Email Address"
                sx={{ width: '20vw' }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={5} justifyContent="left" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <PersonPinCircleRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="First name"
                sx={{ width: '20vw' }}
              />
            </div>
            <div style={{ marginTop: "20px " }}>
              <PersonPinCircleRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Last name"
                sx={{ width: '20vw' }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={5} justifyContent="left" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <ContactsRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Address"
                sx={{ width: '20vw' }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={5} justifyContent="left" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <LocationCityRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="City"
                sx={{ width: '20vw' }}
              />
            </div>
            <div style={{ marginTop: "20px " }}>
              <PublicRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Country"
                sx={{ width: '20vw' }}
              />
            </div>
            <div style={{ marginTop: "20px " }}>
              <MarkAsUnreadIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                id="outlined-required"
                label="Postal Code"
                sx={{ width: '20vw' }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
            <div style={{ marginTop: "20px " }}>
              <Typography variant="body1" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ width: '40vw' }}>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
            </div>
          </Stack>
        </Item>
      </Stack>
    </Box>
  );
}