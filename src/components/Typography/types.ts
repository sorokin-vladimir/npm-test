import { ReactNode } from 'react';

type TTypographyVariant = 'label-primary' |
  'label' |
  'label-small' |
  'subtitle' |
  'primary-body' |
  'body-semibold' |
  'title';
type TTypographyAs = 'span' | 'div';
type TTypographyColor = 'white' | 'text-secondary' | 'btn-disabled';
type TTypographyWeight = 'extra-light' |
  'light' |
  'regular' |
  'medium' |
  'semibold' |
  'bold' |
  'extra-bold';

type TTypography = {
  children: ReactNode;
  variant?: TTypographyVariant;
  as?: TTypographyAs;
  color?: TTypographyColor;
  weight?: TTypographyWeight;
  isTruncate?: boolean;
};

export {
  TTypography,
  TTypographyVariant,
  TTypographyAs,
  TTypographyColor,
  TTypographyWeight,
};
