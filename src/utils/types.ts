import { MutableRefObject, ReactNode } from 'react';
import {
  TInputPlaceholder,
  TInputValue,
  TInputType,
  TInputTruncate,
} from '../components/Input';
import {
  TButtonOnClick,
  TButtonDisabled,
} from '../components/Button';
import { TLogoSize, TLogoShape, TLogoTheme } from '../components/Logo';

type TProps = {
  size?: string;
  color?: string;
  variant?: string;
};

type TStyles = {
  // root?: string;
  [key: string]: string;
};

type TNewProps = {
  className: string;
  id?: string;
  onClick?: TButtonOnClick;
};

type TNewPropsForwardedRef = {
  className: string;
  id?: string;
  onFocus?: (el: HTMLInputElement) => void;
  onChange?: (el: HTMLInputElement) => void;
  placeholder?: TInputPlaceholder;
  ref?: ((instance: HTMLInputElement | null) => void) | MutableRefObject<HTMLInputElement | null> | null;
  value: TInputValue;
  truncate?: TInputTruncate;
  type?: TInputType;
};

type TMapPropsToStyles = (
  props: TProps,
  styles: TStyles,
) => string;

type TStyledComponent = {
  as: string;
  id?: string;
  className?: string;
  styles: TStyles;
  children?: ReactNode;
  color?: string;
  variant?: string;
  type?: 'primary' | 'secondary';
  disabled?: TButtonDisabled;
  onClick?: TButtonOnClick;
  iconButton?: boolean;
  size?: TLogoSize;
  shape?: TLogoShape;
  theme?: TLogoTheme;
  truncate?: TInputTruncate;
};

type TStyledComponentForwardedRef = {
  as: string;
  id?: string;
  className?: string;
  styles: TStyles;
  color?: string;
  disabled?: boolean;
  onFocus?: (el: HTMLInputElement) => void;
  onChange?: (el: HTMLInputElement) => void;
  placeholder?: TInputPlaceholder;
  value: TInputValue;
  type?: TInputType;
};

type TGetParam = (
  param: string,
  el?: HTMLElement | null,
) => string | number | boolean | null;

type TSetParam = (
  param: string,
  value: string | number | boolean,
  el?: HTMLElement | null,
) => boolean;

export {
  TMapPropsToStyles,
  TStyledComponent,
  TNewProps,
  TStyledComponentForwardedRef,
  TNewPropsForwardedRef,
  TStyles,
  TGetParam,
  TSetParam,
};
