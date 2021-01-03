import React, { FC } from 'react';
import { StyledComponent } from '../../utils/styledComponent';
import { TPaper } from './types';
import styles from './Paper.module.css';

const Paper: FC<TPaper> = ({
  as = 'div',
  ...props
}) => (
  <StyledComponent
      as={as}
      // type={type}
      styles={styles}
      {...props}
    ></StyledComponent>
);

export { Paper };
