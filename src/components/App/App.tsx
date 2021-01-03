import React, { FC, ReactNode } from 'react';
// import styles from './App.module.css';

const App: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    {children}
  </>
);

export { App };
