import { Box, Grid, LinearProgress, styled } from '@mui/material';

import { componentSize } from '@/constants/theme';

const GridContainer = styled(Grid)({
  minWidth: componentSize.layout,
  minHeight: '100vh',
});

const SidebarWrapper = styled('div')({
  minHeight: '100vh',
  width: componentSize.sideBar,
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
});

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralLight[50],
  flex: 1,
}));

const MainContainer = styled(Box)({
  position: 'relative',
  width: '100%',
});

const LoadingComponentProgressBar = styled(LinearProgress)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '3px',
  backgroundColor: theme.palette.grey[100],
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.grey[400],
  },
}));

export { GridContainer, LoadingComponentProgressBar, MainContainer, PageContainer, SidebarWrapper };
