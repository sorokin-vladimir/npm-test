import {
  FocusEvent,
  ChangeEvent,
} from 'react';

type TInputType = 'text' | 'number' | 'email' | 'textarea';
type TInputOnChange = (value: string) => void;
type TInputPlaceholder = string;
type TInputDisabled = boolean;
type TInputReadOnly = boolean;
type TInputValue = string | number;
type TInputTruncate = boolean;

/* External API */
type TInput = {
  onChange?: TInputOnChange;
  placeholder?: TInputPlaceholder;
  defaultValue?: TInputValue;
  value?: TInputValue;
  isValid?: boolean;
  type?: TInputType;
  readOnly?: TInputReadOnly;
  disabled?: TInputDisabled;
  isTruncate?: TInputTruncate;
  id?: string;
};

type TInputProps = {
  value: TInputValue;
  placeholder?: TInputPlaceholder;
  disabled?: TInputDisabled;
  ['read-only']?: TInputReadOnly;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  valid?: boolean;
  invalid?: boolean;
  truncate?: TInputTruncate;
  type?: TInputType;
  id?: string;
};

type TCheckValue = (value: TInputValue | undefined) => boolean;

export {
  TInput,
  TInputProps,
  TCheckValue,
  TInputType,
  TInputOnChange,
  TInputPlaceholder,
  TInputDisabled,
  TInputReadOnly,
  TInputValue,
  TInputTruncate,
};
