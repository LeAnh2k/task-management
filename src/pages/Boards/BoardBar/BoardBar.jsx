import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '../../../utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label= {board?.title}
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label= {capitalizeFirstLetter(board?.type)}
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          // onClick={() => {}}
        />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={ <PersonAddIcon /> }
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='leanhdev'>
            <Avatar
              alt="leanhdev"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/335093073_242804394736200_8678491980018939937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHK2oeIwpHVw5db8u-E-OGwtWfPmJ7sTKm1Z8-YnuxMqZYEBMDSSTyy1_GS50t5lKvPUmg6elWF-7OrHFD_cGaK&_nc_ohc=AVWB4v8SRucAX981X3z&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCMb5uzOR5aTOyR7PKLGx5Jfli7uNYrFXbrHjY_fgxqkA&oe=65B005F3" />
          </Tooltip>
          <Tooltip title='leanhdev'>
            <Avatar
              alt="leanhdev"
              src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/60121785_2309526899322052_4796061534151245824_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeH5c49mvVBsSPMjjlsNhZEr6rkZtar_uwrquRm1qv-7CnesbVzn9EgY_a_NqpCGVDVJpvdpdac7UmBWQdCFWMDd&_nc_ohc=BjfIGaQwKaMAX-IfX-w&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfB4WWL2i9A7WoqfvOfa23bC9sT6hqm2NH2UDM7edzgIqw&oe=65D336DF" />
          </Tooltip>
          <Tooltip title='leanhdev'>
            <Avatar
              alt="leanhdev"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/66304840_2356407791300629_3008771603283574784_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGLKNtGd_EUfG9nYbjOwyjA47gdUYWcXbDjuB1RhZxdsBPXSIoco8DUgYaXnug0q3n1JXxzVr9hnCauPfJemvuC&_nc_ohc=MnWcIqZ7fKMAX9GmYBR&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfB_k8R0HIAuSf_y0JTLW4UMb_bMwS8nfB8fmdAOTjphvQ&oe=65D342FB" />
          </Tooltip>
          <Tooltip title='leanhdev'>
            <Avatar
              alt="leanhdev"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/48392391_2223510761257000_6187709531661795328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEhZYAXhSEdZ5Foh9eiE_3bbntzLAWEKXpue3MsBYQpeph2ruJdHs7VtZoIowdudM2HVMhocIZ4NtbP5msucO6V&_nc_ohc=kf8-gaVazcoAX-y5Iee&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDFwNo7bTasTz5sC_KDkymVovPyZrDBJBrQ0i5yh1sRyg&oe=65D3366B" />
          </Tooltip>
          <Tooltip title='leanhdev'>
            <Avatar
              alt="leanhdev"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/335093073_242804394736200_8678491980018939937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHK2oeIwpHVw5db8u-E-OGwtWfPmJ7sTKm1Z8-YnuxMqZYEBMDSSTyy1_GS50t5lKvPUmg6elWF-7OrHFD_cGaK&_nc_ohc=AVWB4v8SRucAX981X3z&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCMb5uzOR5aTOyR7PKLGx5Jfli7uNYrFXbrHjY_fgxqkA&oe=65B005F3" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar