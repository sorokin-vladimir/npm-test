import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { pathes } from './pathes';
import { TIcon, TIconColor, TIconSize } from './types';
import styles from './Icon.module.css';

const Icon: FC<TIcon> = memo(({
  type,
  color = ('black' as TIconColor),
  size = ('m' as TIconSize),
  isRotate = false,
  className,
}) => {
  return (
    <svg
      viewBox={'0 0 24 24'}
      className={clsx(
        className,
        styles.root,
        styles[`size-${size}`],
        styles[`color-${color}`],
        { [styles.rotate]: isRotate || type === 'loader' },
      )}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={(pathes as {[key: string]: string})[(type as string)]} />
    </svg>
  )
});

Icon.displayName = 'Icon';
export { Icon };
