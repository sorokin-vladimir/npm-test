import { pathes } from './pathes';

type TIconType = 'add' | 'send' | 'approve' | 'edit' | 'delete' | 'loader';
type TIconColor = 'white' | 'lightgrey' | 'grey' | 'black' | 'green';
type TIconSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type TIcon = {
  type: TIconType;
  className?: string;
  color?: TIconColor;
  size?: TIconSize;
  isRotate?: boolean;
};

export {
  TIcon,
  TIconType,
  TIconColor,
  TIconSize,
};
