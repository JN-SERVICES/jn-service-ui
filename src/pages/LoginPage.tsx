import { Button, Card, CardContent, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../conf/firebase-conf';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem('firebase_token', await user.getIdToken());
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
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

export default LoginPage;
