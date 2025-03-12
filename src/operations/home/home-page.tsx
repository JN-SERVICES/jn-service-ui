import { Logout } from 'react-admin';
import { Box, Typography, Avatar } from '@mui/material';
import { useWhoami } from '@/security/hooks';

export const HomePage = () => {
  const whoami = useWhoami();

  return (
    <Box>
      <Avatar src={whoami?.avatar!} alt={whoami.firstName} />
      <Typography>{whoami?.email}</Typography>
      <Typography>{whoami?.firstName}</Typography>
      <Logout />
    </Box>
  );
};
