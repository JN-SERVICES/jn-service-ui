import { Box, SxProps } from '@mui/material';
import { LayoutProps } from 'react-admin';
import { FC } from 'react';
import { usePalette } from '../common/hooks';
import { Jnappbar } from './appbar/jnappbar';
import { JNMenu } from './menu/jsmenu';

export const Jnlayout: FC<LayoutProps> = ({ children }) => {
  const { bgcolorPaper, bgprimaryColor } = usePalette();
  const MAIN_CONTENT_SX: SxProps = {
    m: 0,
    mx: '2%',
    pt: '1px',
    width: {
      xs: '100%',
      md: '76%',
    },
    float: 'right',
    bgcolor: bgprimaryColor,
    boxShadow: '0px 3px 6px black',
  };
  return (
    <Box
      id="main-content"
      sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: bgcolorPaper,
      }}
    >
      <Jnappbar />
      <JNMenu />
      <Box sx={MAIN_CONTENT_SX}>{children}</Box>
    </Box>
  );
};
