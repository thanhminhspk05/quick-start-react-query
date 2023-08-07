import { useState } from 'react';

import { DateRange } from '@mui/icons-material';
import { FormHelperText, IconButton, OutlinedInput, SxProps, Theme } from '@mui/material';
import { Stack } from '@mui/system';
import 'rc-time-picker/assets/index.css';

import DatePickerModal from '@/components/organisms/modals/DatePickerModal';

import { FieldLabel, InputWrapper } from '@/styled/components';
import { DateFormatEnum } from '@/types/common';

type DateTimePickerProps = {
  label?: string;
  labelWidth?: string;
  value: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  disabled?: boolean;
  margin?: string;
  errorHeight?: string;
  isNotUseError?: boolean;
  required?: boolean;
  labelPosition?: 'inline' | 'top';
  format?: DateFormatEnum;
  fullWidth?: boolean;
  labelStyle?: SxProps<Theme>;
  haveDefaultErrorSpace?: true;
};

const DateTimePicker = ({
  label,
  labelWidth,
  value,
  onChange,
  errorMessage,
  margin,
  required = false,
  labelPosition = 'inline',
  labelStyle,
  disabled,
  format = DateFormatEnum.short,
  haveDefaultErrorSpace = true,
}: DateTimePickerProps) => {
  const [isShowDatePickerModal, setIsShowDatePickerModal] = useState(false);

  const onOpenDatePickerModal = () => {
    setIsShowDatePickerModal(true);
  };

  const onChangeDateTime = (dateTime: string) => {
    onChange?.(dateTime);
    setIsShowDatePickerModal(false);
  };

  return (
    <InputWrapper
      margin={margin}
      direction={labelPosition === 'inline' ? 'row' : 'column'}
    >
      <FieldLabel
        sx={labelStyle}
        required={!!required}
        width={labelWidth}
      >
        {label}
      </FieldLabel>
      <Stack sx={{ flex: 1 }}>
        <OutlinedInput
          type="text"
          size="small"
          value={value}
          disabled={disabled}
          endAdornment={
            <IconButton size="small">
              <DateRange />
            </IconButton>
          }
          onClick={onOpenDatePickerModal}
        />
        {isShowDatePickerModal && (
          <DatePickerModal
            value={value}
            onClose={() => setIsShowDatePickerModal(false)}
            format={format}
            onChange={onChangeDateTime}
          />
        )}

        {(errorMessage || haveDefaultErrorSpace) && <FormHelperText>{errorMessage || ' '}</FormHelperText>}
      </Stack>
    </InputWrapper>
  );
};

export default DateTimePicker;
