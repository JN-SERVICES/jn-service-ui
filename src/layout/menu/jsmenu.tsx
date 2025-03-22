import { useNavigate } from 'react-router-dom';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import { usePalette } from '../../common/hooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLogout } from 'react-admin';

export const JNMenu = () => {
  const navigate = useNavigate();
  const { bgsecondaryColor, textlightColor } = usePalette();
  const logout = useLogout();

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '19vw',
        backgroundColor: bgsecondaryColor,
        color: textlightColor,
      }}
    >
      <MenuList
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
          gap: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <MenuItem onClick={() => navigate('/account')}>
            <ListItemIcon>
              <AccountCircleIcon
                style={{ color: textlightColor }}
                fontSize="large"
              />
            </ListItemIcon>
            <Typography
              sx={{ paddingInline: '6px' }}
              fontWeight={'bold'}
              variant="inherit"
            >
              Profil
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigate('/persons')}>
            <ListItemIcon>
              <PeopleAltIcon
                style={{ color: textlightColor }}
                fontSize="large"
              />
            </ListItemIcon>
            <Typography
              sx={{ paddingInline: '6px' }}
              fontWeight={'bold'}
              variant="inherit"
            >
              Utilisateurs
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigate('/flux-financier')}>
            <ListItemIcon>
              <SsidChartIcon
                style={{ color: textlightColor }}
                fontSize="large"
              />
            </ListItemIcon>
            <Typography
              sx={{ paddingInline: '6px' }}
              fontWeight={'bold'}
              variant="inherit"
            >
              Flux financier
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigate('/salaire')}>
            <ListItemIcon>
              <CurrencyExchangeIcon
                style={{ color: textlightColor }}
                fontSize="large"
              />
            </ListItemIcon>
            <Typography
              sx={{ paddingInline: '6px' }}
              fontWeight={'bold'}
              variant="inherit"
            >
              Salaire
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigate('/services')}>
            <ListItemIcon>
              <ShoppingCartIcon
                style={{ color: textlightColor }}
                fontSize="large"
              />
            </ListItemIcon>
            <Typography
              sx={{ paddingInline: '6px' }}
              fontWeight={'bold'}
              variant="inherit"
            >
              Services
            </Typography>
          </MenuItem>
        </Box>
        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <LogoutIcon style={{ color: textlightColor }} fontSize="large" />
          </ListItemIcon>
          <Typography
            sx={{ paddingInline: '6px' }}
            fontWeight={'bold'}
            variant="inherit"
          >
            Déconnexion
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
};
