import { ReactNode } from 'react';
import { TIconType } from '../Icon';

type TButtonType = 'primary' | 'secondary';
type TButtonDisabled = boolean | TButtonType;
type TButtonOnClick = () => void;

type TButton = {
  children?: ReactNode;
  icon?: TIconType;
  isLoading?: boolean;
  onClick?: TButtonOnClick;
  className?: string;
  type?: TButtonType;
  disabled?: TButtonDisabled;
};

export {
  TButton,
  TButtonType,
  TButtonDisabled,
  TButtonOnClick,
};
