import { ButtonProps } from '@mui/material';

export interface IOption<TValue extends string | number | boolean> {
  label: string;
  value: TValue;
}

export type DropdownType = {
  value: string | number;
  label: string;
  name?: string;
};

export type IPlainObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
export interface IDialogBaseRef {
  show: (callback?: () => void) => void;
  hide: () => void;
}

export type PageInfoDto = {
  pageLength: number | string;
  pageNum: number;
  sort?: boolean;
  sortField?: string;
  sortingType?: string;
};

export type RequestListQueryData = {
  pageInfoDto?: PageInfoDto;
  conditionDto?: ConditionDto;
};

export type MutationPayload<Payload extends IPlainObject = IPlainObject> = {
  dto: Payload;
};

export type pagingResultDto = {
  count: number;
  currentPage: number;
  totalNum: number;
  totalPage: number;
};

export type ConditionDto = {
  key: string;
  value?: string;
}[];

export type PaginationBaseResponseDto = {
  pageInfoDto: PageInfoDto;
  pagingResultDto: pagingResultDto;
  conditionDto: ConditionDto;
  count: number;
};

export type ResponseHeader = {
  fileBaseDirectory: null | string;
  files: [];
  guid: null | string;
  inputMsgType: null | string;
  length: 0;
  outputMsgType: null | string;
  responseCode: string;
  responseMsg: null | string;
  responseMsgDetails: null | string;
  service: null | string;
  tenantId: null | string;
  transferKey: null | string;
};

export type IOriginalResponse<TDto> = {
  dto: TDto;
  header: ResponseHeader;
};

type ErrorException = {
  code: string | null;
  message: string | null;
  name: string | null;
  stackTrace: string | null;
};

export type IErrorResponse = {
  exception: ErrorException;
  header: ResponseHeader;
};

interface ITextFieldButton extends Pick<ButtonProps, 'color' | 'onClick' | 'variant' | 'disabled'> {
  label: string;
}

export type ITextFieldButtonsConfig = {
  position?: 'right' | 'bottom';
  gap?: number;
  buttons: ITextFieldButton[];
};

export enum UsingEnum {
  YES = 'y',
  NO = 'n',
}

export enum DateFormatEnum {
  short = 'yyyy-MM-dd',
  full = 'yyyy-MM-dd HH:mm:ss',
}

export enum FormViewEnum {
  CREATE = 'Create',
  EDIT = 'Edit',
  DELETE = 'Delete',
}

export type NotNullable<T> = T extends null | undefined ? never : T;

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type PageHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumbs: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any;
};
