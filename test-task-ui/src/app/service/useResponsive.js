"use client"
import { useTheme, useMediaQuery } from '@mui/material';

export default function useResponsive() {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  return isMobileDevice;
}
