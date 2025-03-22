import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { usePalette } from '../../common/hooks';
import jnlogo from '../../assets/logojn.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { PALETTE_COLORS } from '../../jnthemes';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export const Jnappbar = () => {
  const { bgcolor, textPrimaryColor, textSecondaryColor } = usePalette();
  const location = useLocation();
  const auth = getAuth();

  // État pour stocker les infos de l'utilisateur
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const pageTitles: Record<string, string> = {
    '/persons': 'Utilisateurs',
    '/flux-financier': 'Flux Financier',
    '/salaire': 'Salaire',
    '/services': 'Services',
    '/profil': 'Profil',
  };

  const currentPage = pageTitles[location.pathname] || 'Accueil';

  return (
    <AppBar position="sticky" sx={{ backgroundColor: bgcolor }}>
      <Toolbar
        sx={{
          display: 'flex',
          flex: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '10vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 'row',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ width: 60, height: 60 }}>
            <img
              src={jnlogo}
              alt="Exemple"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ color: textPrimaryColor, fontWeight: 'bold' }}
          >
            JN-Services
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: textSecondaryColor, fontSize: 16 }}
          >
            {currentPage}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 'row',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <IconButton size="large" color="inherit">
            <Badge badgeContent={15} color="error">
              <WhatsAppIcon
                style={{
                  fontSize: '35px',
                  color: PALETTE_COLORS.textPrimaryColor,
                }}
              />
            </Badge>
          </IconButton>
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt={user?.displayName || 'Utilisateur'}
            src={user?.photoURL || '/static/images/avatar/default.png'}
          />
          <Box sx={{ color: textPrimaryColor }}>
            <Typography fontWeight={'bold'}>
              {user?.displayName || 'Utilisateur'}
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>Admin</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
