import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { createTheme } from '@mui/material';

import { NotoSansKR } from './font';
import layoutTheme from './layout';
import themePalette from './palette';

const themeComponent = createTheme({
  typography: {
    fontSize: 13,
    allVariants: {
      fontFamily: 'NotoSansKR, sans-serif',
      fontSize: 13,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: NotoSansKR,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        labelRowsPerPage: 'List per Page',
        labelDisplayedRows({
          from,
          to,
          count,
        }: {
          from: string | number;
          to: string | number;
          count: string | number;
        }) {
          return `${from}-${to} out of ${count}`;
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: '2px',
          height: '18px',
          width: '18px',
          color: themePalette.palette.icon.secondary,
          '&:hover': {
            backgroundColor: themePalette.palette.layer?.hover03,
          },
          '.MuiSvgIcon-root': {
            height: '18px',
            width: '18px',
          },
          '& .Mui-disabled': {
            color: themePalette.palette.icon.disabled,
          },
        },
      },
    },
    MuiTableCell: {
      defaultProps: {
        padding: 'none',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: themePalette.palette.text.primary,
          backgroundColor: themePalette.palette.background['01'],
          padding: '4px 8px',
          borderRadius: '4px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          minHeight: '28px',
          padding: '4px 8px',
          borderColor: themePalette.palette.border?.['02'],
          '&:hover:not(.Mui-disabled)': {
            backgroundColor: themePalette.palette.field?.hover,
            '&:not(.Mui-focused) fieldset': {
              border: `1px solid ${themePalette.palette.border?.['04']}`,
            },
          },
          '&.Mui-focused:not(.Mui-readOnly) fieldset': {
            border: `2px solid ${themePalette.palette.border?.brandPrimary}`,
          },
          '&.Mui-disabled:not(.Mui-readOnly)': {
            borderColor: themePalette.palette.border?.disabled,
            '&:has(.MuiSelect-select)': {
              borderColor: themePalette.palette.border?.['02'],
              backgroundColor: themePalette.palette.background?.['03'],
            },
          },
          '&.Mui-readOnly:not(.Mui-disabled)': {
            borderColor: themePalette.palette.border?.['02'],
            backgroundColor: themePalette.palette.background?.['03'],
            '&.Mui-focused fieldset ': {
              borderColor: themePalette.palette.border?.['04'],
            },
          },

          '& .MuiOutlinedInput-input': {
            padding: 0,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...layoutTheme.typography.base,
          '&:hover ': {
            backgroundColor: themePalette.palette.layer?.hover01,
          },
          '&.Mui-selected': {
            backgroundColor: themePalette.palette.layer?.active01,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          ...layoutTheme.typography.base,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        variant: 'contained',
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: themePalette.palette.button.secondary,
            color: themePalette.palette.text.primary,
            '&.MuiButton-contained': {
              backgroundColor: themePalette.palette.button.secondary01,
              '&.Mui-disabled': {
                color: themePalette.palette.neutralLight[300],
                backgroundColor: themePalette.palette.neutralLight[50],
                '& .MuiButton-startIcon': {
                  color: themePalette.palette.neutralLight[200],
                },
              },
              '&.Mui-focusVisible': {
                backgroundColor: themePalette.palette.button.secondaryActive02,
              },
            },
            '&.MuiButton-outlined': {
              borderColor: themePalette.palette.border?.['02'],
              '&.Mui-focusVisible': {
                backgroundColor: themePalette.palette.button.secondaryActive01,
              },
            },
            '&:hover': {
              backgroundColor: themePalette.palette.button.secondaryHover01,
              '&.MuiButton-contained': {
                backgroundColor: themePalette.palette.button.secondaryHover02,
              },
            },
          },
        },
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            backgroundColor: themePalette.palette.button.primary,
            color: themePalette.palette.text.inverse,
            '&:hover': {
              backgroundColor: themePalette.palette.button.primaryHover,
            },
            '&.Mui-disabled': {
              backgroundColor: themePalette.palette.button.primaryDisabled,
              '& .MuiButton-startIcon > svg path': {
                fill: themePalette.palette.neutralLight[200],
              },
            },
            '&.Mui-focusVisible': {
              backgroundColor: themePalette.palette.button.primaryActive,
            },
          },
        },
        {
          props: { color: 'primary', variant: 'text' },
          style: {
            color: themePalette.palette.button.primary,
            '&:hover': {
              backgroundColor: themePalette.palette.button.secondaryHover01,
            },
            '&.Mui-disabled': {
              color: themePalette.palette.text.disabled,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          gap: '4px',
          boxShadow: 'none',
          minWidth: 'unset',
          justifyContent: 'center',
          textTransform: 'inherit',
          '&:hover': { boxShadow: 'none' },
          '&.Mui-focusVisible': {
            boxShadow: 'none',
          },
          '&.MuiButton-sizeSmall': {
            ...layoutTheme.typography.buttonNormal,
            padding: '4px 8px',
          },
          '&.MuiButton-sizeLarge': {
            ...layoutTheme.typography.buttonLarge,
            padding: '6px 16px',
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
        startIcon: {
          margin: 0,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
          '&.MuiButton-sizeSmall': {
            width: 18,
            height: 18,
            '& svg': {
              width: 15,
              height: 15,
            },
          },
          '&.MuiButton-sizeLarge': {
            width: 20,
            height: 20,
            '& svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: { size: 'medium' },
      variants: [
        {
          props: { size: 'medium' },
          style: {
            root: {
              width: 24,
              height: 24,
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            root: {
              width: 18,
              height: 18,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
        sizeSmall: {
          width: 18,
          height: 18,
          '& > svg': { width: 18, height: 18 },
        },
        sizeMedium: {
          width: 24,
          height: 24,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreSharpIcon,
      },
      styleOverrides: {
        iconOpen: {
          fill: `${themePalette.palette.icon.brandPrimary} !important`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: `2px solid ${themePalette.palette.border?.['02']}`,
          height: '40px !important',
          '& .MuiTableCell-root': {
            ...layoutTheme.typography.listTitle,
            color: themePalette.palette.text.secondary,
            padding: '8px 10px',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            borderBottom: `1px solid ${themePalette.palette.border?.['02']}`,
            height: '32px !important',
            '&:hover': { backgroundColor: themePalette.palette.layer?.hover01 },
            '& .MuiTableCell-root': {
              ...layoutTheme.typography.base,
              color: themePalette.palette.text.primary,
              padding: '6px 8px',
            },
            '&.Mui-selected': {
              backgroundColor: themePalette.palette.layer?.accentSelected01,
            },
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 'unset !important',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '2px 12px',
          height: 'unset',
          gap: 4,
          '&:hover': {
            paddingRight: 8,
          },
          '&:hover svg.MuiSvgIcon-root': {
            opacity: 1,
            display: 'flex',
          },
        },
        label: {
          color: themePalette.palette.text.primary,
          padding: 0,
          ...layoutTheme.typography.base,
        },
        deleteIcon: {
          display: 'none',
          opacity: 0,
          transition: 'opacity 250ms',
          fontSize: '18px',
          color: themePalette.palette.icon.primary,
          margin: 0,
          '&:hover': {
            color: themePalette.palette.icon.primary,
          },
        },
        icon: {
          margin: 0,
        },
      },
      variants: [
        {
          props: { color: 'primary', variant: 'filled' },
          style: {
            backgroundColor: themePalette.palette.neutralLight['150'],
            '&:hover': {
              backgroundColor: themePalette.palette.neutralLight['150'],
            },
          },
        },
        {
          props: { color: 'secondary', variant: 'filled' },
          style: {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxHeight: '80vh',
          margin: 0,
          boxShadow: '0px 2px 8px 0px #0000004D',
          '& > div.MuiDialogContent-root': {
            padding: '16px 0px 8px 20px ',
            marginRight: '20px',
          },
        },
        root: {
          zIndex: 1000,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 20px 20px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '20px 20px 0px',
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          height: 28,
          width: 28,
          '& span svg': {
            height: 18,
            width: 18,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...layoutTheme.typography.base,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
          color: 'inherit',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '2px 0 6px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 4px',
        },
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
      },
    },
  },
});

export default themeComponent;
