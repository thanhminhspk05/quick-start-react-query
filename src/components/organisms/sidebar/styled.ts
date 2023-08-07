import { NavLink } from 'react-router-dom';

import { Box, Breadcrumbs, Grid, ListItemButton, ListItemIcon, Stack, styled } from '@mui/material';

import { componentSize } from '@/constants/theme';
import theme from '@/theme';

const GridContainer = styled(Grid)({
  minWidth: '1600px',
  minHeight: 'calc(var(--vh, 1vh) * 100)',
});

const SidebarWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  width: componentSize.sideBar,
  backgroundColor: theme.palette.background.default,
  ...theme.customShadow.sidebar,
}));

const LogoWrapper = styled(Stack)(({ theme }) => ({
  height: componentSize.header,
  borderBottom: `1px solid ${theme.palette.neutralLight[150]}`,
  paddingLeft: '20px',
  alignItems: 'center',
}));

const BreadcrumbsStyled = styled(Breadcrumbs)({
  '.MuiBreadcrumbs-li': {
    ':last-child a ': {
      color: '#0485E3',
    },
    '&.MuiBreadcrumbs-separator ': {
      color: '#9EA4AC',
    },
    a: {
      fontSize: '12px',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      cursor: 'pointer',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
});

const BreadcrumbsWrapper = styled(Box)({
  padding: '30px 20px',
  backgroundColor: '#E8EBEE',
});

const CmBreadcrumbsStyle = styled('div')`
  * {
    font: '13px';
  }
`;

const ListItemButtonParentStyled = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '5px',
  fontWeight: theme.typography.fontWeightBold,
  height: '38px',
  '&.Mui-selected, &:hover': {
    backgroundColor: theme.palette.blue[50],
  },
  '.MuiTypography-root': {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography?.sidebarParent?.fontSize || '15px',
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  '.MuiListItemIcon-root': {
    visibility: 'hidden',
  },
  '&.active': {
    color: theme.palette.primary.main,
    '.Mui-selected': {
      backgroundColor: 'transparent',
    },
    '.MuiListItemIcon-root': {
      visibility: 'visible',
    },
  },
  '&:hover': {
    color: theme.palette.blue[300],
    '.MuiListItemIcon-root': {
      visibility: 'visible',
    },
  },
  '.MuiTypography-root': {
    fontSize: theme.typography.base.fontSize,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  marginRight: '15px',
}));

export {
  BreadcrumbsStyled,
  BreadcrumbsWrapper,
  CmBreadcrumbsStyle,
  GridContainer,
  ListItemButtonParentStyled,
  LogoWrapper,
  SidebarWrapper,
  StyledListItemIcon,
  StyledNavLink,
};
