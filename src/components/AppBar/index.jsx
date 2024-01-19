import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  <Box sx={{
    backgroundColor: 'primary.light',
    wight: '100%',
    height: (theme) => theme.trello.appBarHeight,
    display: 'flex',
    alignItems: 'center'
  }}>
    <ModeSelect />
  </Box>
}

export default AppBar