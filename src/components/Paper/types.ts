import { ReactNode } from 'react';

type TPaperAs = 'span' | 'div';

type TPaper = {
  children: ReactNode;
  as?: TPaperAs;
};

export { TPaper };
