import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InventoryLogo from '../../assets/inventoryLogo.jpeg'
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../../Styled'

export default function Header() {
  return (
    <HeaderStyle>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <img src ={InventoryLogo} width ='50' alt='logo' />
            </Link>
          </IconButton>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >INVENTORY
          </Typography>
        </Toolbar>
      </AppBar>
      </HeaderStyle>
  );
}