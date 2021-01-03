import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { StyledComponent } from '../../utils/styledComponent';
import { Typography } from '../Typography';
import { Icon as IconComponent } from '../Icon';
import { TButton, TButtonType } from './types';
import { TTypographyColor } from '../Typography';
import styles from './Button.module.css';

const areEqual = (prevProps: Readonly<any>, nextProps: Readonly<any>): boolean => (
  Object.entries(nextProps).every(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return value === prevProps[key];
    }
    if (Array.isArray(value)) {
      return value.every((val, idx) => (typeof val === 'string' || typeof val === 'number') &&
        val === prevProps[key][idx]);
    }
    if (typeof value === 'function') {
      return true;
    }
}));

const Button: FC<TButton> = memo(({
  children,
  type = ('primary' as TButtonType),
  disabled = false,
  onClick,
  icon: iconProp,
  isLoading,
  ...props
}) => {
  let color: TTypographyColor = type === 'primary' ? 'white' : 'text-secondary';
  color = disabled && type === 'secondary' ? 'btn-disabled' : color;
  iconProp = isLoading ? 'loader' : iconProp;

  console.log(`Button:41 | styles`, styles);
  const icon = (iconProp ?
    <div className={clsx(styles.iconCentred, { [styles.iconSpace]: !!children })}>
      <IconComponent
        type={iconProp}
        color={
          type === 'primary' ?
            'white' :
            disabled ? 'lightgrey' : 'grey'
        }
        isRotate={isLoading}
        size='s'
      />
    </div>
    :
    null);

  const text = (
    typeof children === 'string' ||
    typeof children === 'number' ||
    (Array.isArray(children) && children.every(child => typeof child === 'string' || typeof child === 'number')) ?
      (<Typography variant="primary-body" color={color} weight="medium">
        {children}
      </Typography>)
      :
      !!children ? children : null);

  return (
    <StyledComponent
      as="button"
      type={type}
      disabled={disabled && type}
      onClick={disabled || isLoading ? undefined : onClick}
      styles={styles}
      iconButton={!children}
      {...props}
    >
      {icon}
      {text}
    </StyledComponent>
  )
}, areEqual);

Button.displayName = 'Button';
export { Button };
