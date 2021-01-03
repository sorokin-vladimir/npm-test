import React, { FC, ReactNode, useState } from 'react';
import styles from './TestComponent.module.css';

import { Button } from '../Button';
import { Typography as Typo } from '../Typography';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { Paper } from '../Paper';
// import { logger } from '../../utils';

const ru = 'Съешь ещё этих мягких французских булок, да выпей чаю';
const en = 'The quick brown fox jumps over the lazy dog';

const TestComponent: FC<{ children?: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(1);
  const handleClick = () => setCount(count + 1);
  // logger('info', testStore.users[0].name);

  return (
    <div className={styles.test}>
      {children}
      <Typo>{count}</Typo>
      {/* <Typo>{0}</Typo>
      <Typo>{NaN}</Typo>
      <Typo>{null}</Typo>
      <Typo>{undefined}</Typo>
      <Typo>{false}</Typo>
      <Typo>{true}</Typo>
      <span style={{fontSize: '12px', fontFamily: 'Roboto',}}>12px {ru} {en}</span>
      <span style={{fontSize: '14px', fontFamily: 'Roboto',}}>14px {ru} {en}</span>
      <Typo variant="label-primary">Typo label primary {ru} {en}</Typo>
      <Typo variant="label">Typo label {ru} {en}</Typo>
      <Typo variant="label" weight="bold">Typo label; weight bold; {ru} {en}</Typo>
      <Typo variant="label-small">Typo label small {ru} {en}</Typo>
      <Typo variant="subtitle">Typo subtitle {ru} {en}</Typo>
      <Typo weight="bold" variant="subtitle">Typo subtitle;  weight bold; {ru} {en}</Typo>
      <Typo variant="primary-body">Typo primary body {ru} {en}</Typo>
      <Typo variant="primary-body" color="text-secondary">Typo primary body; color text-secondary; {ru} {en}</Typo>
      <Typo variant="primary-body" color="white">Typo primary body; color white; {ru} {en}</Typo>
      <Typo variant="body-semibold">Typo body semibold {ru} {en}</Typo>
      <Typo variant="body-semibold" as='div'>Typo body semibold DIV {ru} {en}</Typo>
      <Typo variant="body-semibold" as='div'>Typo body semibold DIV</Typo>
      <Typo variant="title">Typo title {ru} {en}</Typo> */}
      <Button onClick={handleClick}>No</Button>
      <Button type="primary" onClick={handleClick} disabled>type prim disabled</Button>
      <Button type="secondary" onClick={handleClick}>secondary large</Button>
      <Button type="secondary" onClick={handleClick} disabled>secondary large disabled</Button>
      <Button type="primary" onClick={handleClick}>type prim {count}</Button>
      <Typo variant="primary-body">Typo primary-body {ru} {en}</Typo>
      <Icon type="send" />
      <Input isValid={false} />
      <Logo name="qwe" url="asd" />
      <Paper>paper</Paper>
    </div>
  )
};

export { TestComponent };
