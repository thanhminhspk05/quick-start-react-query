import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SizeOptions {
    xs?: string;
    sm?: string;
    base?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    '4xl'?: string;
    '5xl'?: string;
    '6xl'?: string;
  }
  interface TypographyVariants {
    header: React.CSSProperties;
    menuTitle: React.CSSProperties;
    listTitle: React.CSSProperties;
    contentTitle: React.CSSProperties;
    dialogTitle: React.CSSProperties;
    breadcrumbTag: React.CSSProperties;
    contestLabel: React.CSSProperties;
    chartLabel: React.CSSProperties;
    default: React.CSSProperties;
    base: React.CSSProperties;
    tabTag: React.CSSProperties;
    cardRightInfo: React.CSSProperties;
    helper: React.CSSProperties;
    link: React.CSSProperties;
    buttonNormal: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    sidebarParent?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header?: React.CSSProperties;
    menuTitle?: React.CSSProperties;
    listTitle?: React.CSSProperties;
    contentTitle?: React.CSSProperties;
    dialogTitle?: React.CSSProperties;
    breadcrumbTag?: React.CSSProperties;
    chartLabel?: React.CSSProperties;
    base?: React.CSSProperties;
    tabTag?: React.CSSProperties;
    emptyInfo?: React.CSSProperties;
    cardRightInfo?: React.CSSProperties;
    helper?: React.CSSProperties;
    link?: React.CSSProperties;
    buttonNormal?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    sidebarParent?: React.CSSProperties;
  }

  interface ThemeOptions {
    customShadow?: {
      dialog: React.CSSProperties;
      dropdownList: React.CSSProperties;
      card01: React.CSSProperties;
      sidebar: React.CSSProperties;
    };
    iconSize?: SizeOptions;
    height?: {
      normal: string;
      mainHeader: string;
    };
  }

  interface DefaultTheme extends Theme {
    iconSize: SizeOptions;
    height: {
      normal: string;
      mainHeader: string;
    };
  }

  interface Theme {
    height: {
      normal: string;
      mainHeader: string;
    };
    iconSize: SizeOptions;
    customShadow: {
      dialog: React.CSSProperties;
      dropdownList: React.CSSProperties;
      card01: React.CSSProperties;
      sidebar: React.CSSProperties;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    header: true;
    menuTitle: true;
    listTitle: true;
    contentTitle: true;
    dialogTitle: true;
    breadcrumbTag: true;
    contestLabel: true;
    chartLabel: true;
    base: true;
    tabTag: true;
    emptyInfo: true;
    cardRightInfo: true;
    helper: true;
    link: true;
    sidebarParent: true;
    deleteText: true;
  }
}

let layoutTheme = createTheme({
  spacing: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72],
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    allVariants: {
      fontFamily: '"NotoSansKR", sans-serif',
      textTransform: 'none',
    },
    button: {
      textTransform: 'none',
    },
  },
  iconSize: {
    xs: '8px',
    sm: '16px',
    base: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
  },
  customShadow: {
    dialog: {
      boxShadow: '0 2px rgb(0 0 0, 0.3)',
    },
    dropdownList: {
      boxShadow: '0 2px rgb(0 0 0, 0.3)',
    },
    card01: {
      boxShadow: '0 1px rgb(0 0 0, 0.2)',
    },
    sidebar: {
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
    },
  },
  height: {
    normal: '28px',
    mainHeader: '54px',
  },
});

layoutTheme = createTheme(layoutTheme, {
  typography: {
    header: {
      fontSize: '18px',
      fontWeight: layoutTheme.typography.fontWeightBold,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    menuTitle: {
      fontSize: '11px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '16px',
      letterSpacing: '-0.002em',
    },
    listTitle: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    contentTitle: {
      fontSize: '15px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    dialogTitle: {
      fontSize: '16px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    breadcrumbTag: {
      fontSize: '11px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '14px',
      letterSpacing: '-0.002em',
    },
    contestLabel: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    chartLabel: {
      fontSize: '12px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '14px',
      letterSpacing: '-0.002em',
    },
    base: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    tabTag: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.01em',
    },
    emptyInfo: {
      fontSize: '15px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    cardRightInfo: {
      fontSize: '14px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    deleteText: {
      fontSize: '14px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    helper: {
      fontSize: '12px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '16px',
      letterSpacing: '-0.002em',
    },
    link: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    buttonNormal: {
      fontSize: '13px',
      fontWeight: layoutTheme.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.01em',
    },
    buttonLarge: {
      fontSize: '16px',
      fontWeight: layoutTheme.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.01em',
    },
    sidebarParent: {
      fontSize: '15px',
      fontWeight: layoutTheme.typography.fontWeightBold,
      lineHeight: '24px',
    },
    h6: {
      fontSize: '15px',
      fontWeight: layoutTheme.typography.fontWeightBold,
      lineHeight: '24px',
      letterSpacing: '-0.003em',
    },
  },
});

export default layoutTheme;
