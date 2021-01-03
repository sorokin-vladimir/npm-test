import React, {
  FC,
  memo,
  useState,
  useRef,
  FocusEvent,
  ChangeEvent,
  MutableRefObject,
} from 'react';
import { StyledComponentForwardedRef } from '../../utils/styledComponent';
import { TInput, TInputProps, TCheckValue, TInputType, TInputValue } from './types';
import styles from './Input.module.css';

const checkValue: TCheckValue = (value) => (
  value === '' ||
  value === 0 ||
  !!value
);

const areEqual = (prevProps: Readonly<any>, nextProps: Readonly<any>): boolean => (
  Object.entries(nextProps).every(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return value === prevProps[key];
    }
    if (typeof value === 'function') {
      return true;
    }
}));

const Input: FC<TInput> = memo(({
  type = ('text' as TInputType),
  disabled,
  readOnly,
  defaultValue = '',
  value,
  onChange,
  isValid,
  isTruncate,
  ...props
}) => {
  const isValue = useRef(checkValue(value)) as MutableRefObject<boolean>;
  value = isValue.current ? (value as string).toString() : undefined;
  const [val, setValue] = useState<TInputValue>((
    (isValue.current ? value : defaultValue) as string));
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (disabled || readOnly) event.target.blur();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let currentValue = event.target.value;
    if (type === 'number') currentValue = isFinite((currentValue as unknown as number)) ?
      currentValue : currentValue.slice(0, -1);

    if (!disabled && !readOnly && !isValue.current) setValue(currentValue);
    if (onChange) onChange(currentValue);
  }

  const inputProps: TInputProps = {
    type: type === 'email' ? 'email' : undefined,
    onFocus: handleFocus,
    onChange: handleChange,
    value: ((disabled || readOnly || !isValue.current ?
      val : value) as string),
    truncate: isTruncate,
    ['read-only']: readOnly,
    disabled,
  };
  if (typeof isValid !== 'undefined') {
    inputProps[isValid ? 'valid' : 'invalid'] = true;
  }

  return (
    <StyledComponentForwardedRef
      as={type === 'textarea' ? type : 'input'}
      ref={ref}
      styles={styles}
      {...inputProps}
      {...props}
    />
  )
}, areEqual);

Input.displayName = 'Input';
export { Input };
