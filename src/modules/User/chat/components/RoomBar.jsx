import { Box, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const RoomBar = () => {

  return (
    <MuiAppBar sx={{ position: 'relative', boxShadow: 'none', }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottomColor: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.grey[700]
              : theme.palette.grey[900],
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          color: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.common.black
              : theme.palette.common.black,
          backgroundColor: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.common.white
              : theme.palette.grey[900],
        }}
      > 
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>

          <Typography variant="h4">{'ASDASDAS'}</Typography>
        </Box>
 
      </Toolbar>
    </MuiAppBar>
  );
};

export default RoomBar;