import { InputLabel, styled } from '@mui/material';
import { Box } from '@mui/system';

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  //TODO: Add styled
}));

const InputWrapper = styled('div')(
  ({
    width,
    margin,
    direction,
  }: {
    width?: string;
    margin?: string;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    labelWidth?: string;
  }) => ({
    display: 'flex',
    flexDirection: direction,
    width: width || '100%',
    margin: margin || '0px',
    '.MuiFormControl-fullWidth': {
      flexGrow: 1,
    },
  })
);

const FieldLabel = styled(InputLabel)<{ width?: string }>(({ width, theme }) => ({
  ...theme.typography.base,
  width: width || '200px',
  padding: '4px 0',
  whiteSpace: 'break-spaces',
  '&.Mui-required': {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    '& .MuiFormLabel-asterisk': {
      color: theme.palette.text.brandPrimary,
      paddingRight: 4,
    },
  },
}));

export { FieldLabel, InputWrapper, PageHeader };
