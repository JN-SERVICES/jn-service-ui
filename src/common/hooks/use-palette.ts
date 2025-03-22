import { useTheme, Palette, PaletteColor } from '@mui/material';
import { PALETTE_COLORS } from '../../jnthemes';

const getPaletteColorNumberValue = (
  paletteColor: PaletteColor,
  value: number
): string => {
  return (paletteColor as unknown as Record<string, string>)[value] ?? '';
};

export const usePalette = () => {
  const theme = useTheme();
  const bgcolor = PALETTE_COLORS.bgcolor;
  const bgcolorPaper = PALETTE_COLORS.bgcolorPaper;
  const bgprimaryColor = PALETTE_COLORS.bgprimaryColor;
  const bgsecondaryColor = PALETTE_COLORS.bgsecondaryColor;
  const textPrimaryColor = PALETTE_COLORS.textPrimaryColor;
  const textSecondaryColor = PALETTE_COLORS.textSecondaryColor;
  const primaryPalette = PALETTE_COLORS.textPrimaryColor;
  const textlightColor = PALETTE_COLORS.textlightColor;

  return {
    palette: theme.palette as Palette &
      Record<string, string | number | undefined>,
    getPaletteColorValue: getPaletteColorNumberValue,
    bgcolor,
    textPrimaryColor,
    textSecondaryColor,
    bgcolorPaper,
    bgprimaryColor,
    bgsecondaryColor,
    primaryPalette,
    textlightColor,
  };
};
