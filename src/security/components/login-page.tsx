import { Button, Card, CardContent, Typography } from '@mui/material';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLogin } from 'react-admin';

import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage = () => {
  const login = useLogin();

  const handleLogin = async () => {
    login(GoogleAuthProvider);
  };

  return (
    <Card sx={{ width: 300, margin: 'auto', marginTop: '10%' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5">JN SERVICES CONNECTION</Typography>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ marginTop: 2 }}
          onClick={handleLogin}
        >
          Se connecter avec Google
        </Button>
      </CardContent>
    </Card>
  );
};
