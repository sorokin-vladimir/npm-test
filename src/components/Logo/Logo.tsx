import React, { FC, memo } from 'react';
import { StyledComponent } from '../../utils/styledComponent';
import { TLogo, TLogoSize, TLogoShape, TLogoTheme } from './types';
import styles from './Logo.module.css';

const Logo: FC<TLogo> = memo(({
  size = ('m' as TLogoSize),
  url,
  name,
  shape = ('circle' as TLogoShape),
  theme = ('light' as TLogoTheme),
  ...props
}) => {
  const newProps = { styles, size, shape, theme, };

  return (
    <StyledComponent as="div" {...newProps} {...props}>
      <img src={url} alt={name} width='100%' />
    </StyledComponent>
  );
});

Logo.displayName = 'Logo';
export { Logo };
