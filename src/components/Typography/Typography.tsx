import React, { FC, memo } from 'react';
import { StyledComponent } from '../../utils/styledComponent';
import { TTypography, TTypographyVariant, TTypographyAs } from './types';
import styles from './Typography.module.css';

const areEqual = (prevProps: Readonly<any>, nextProps: Readonly<any>): boolean => (
  Object.entries(nextProps).every(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null ||
      value === undefined
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

const Typography: FC<TTypography> = memo(({
  as = ('span' as TTypographyAs),
  children,
  color,
  variant = ('primary-body' as TTypographyVariant),
  isTruncate = false,
  ...props
}) => {
  if (
    !color &&
    (variant === 'label' || variant === 'label-small')
  ) {
    color = 'text-secondary';
  }

  if (typeof children === 'number' && Number.isNaN(children)) children = children.toString();

  return (
    <StyledComponent
      as={as}
      styles={styles}
      color={color}
      variant={variant}
      truncate={isTruncate}
      {...props}
    >
      {children}
    </StyledComponent>
  )
}, areEqual);

Typography.displayName = 'Typography';
export { Typography };
