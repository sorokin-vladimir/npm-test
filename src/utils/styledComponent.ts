import {
  FC,
  ForwardRefRenderFunction,
  createElement,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import {
  TMapPropsToStyles,
  TStyledComponent,
  TNewProps,
  TStyledComponentForwardedRef,
  TNewPropsForwardedRef,
} from './types';

const mapPropsToStyles: TMapPropsToStyles = (props = {}, styles = {root: ''}) => {
  const mappedClassNames = Object.entries(props).reduce((mappedStyles, [prop, value]) => {
    let className = '';
    switch(typeof value) {
      case 'boolean':
        className = value ? prop : '';
        break;
      case 'string':
        className = `${prop}-${value}`;
        break;
    }
    if (className === '' || typeof styles[className] === 'undefined') return mappedStyles;
    return { ...mappedStyles, [styles[className]]: true }
  }, {});

  return clsx(styles.root, mappedClassNames);
}

const StyledComponentFunc: FC<TStyledComponent> = ({
  as,
  className,
  styles,
  children,
  ...props
}) => {
  const { onClick, id } = props;
  const classes = mapPropsToStyles(props, styles);
  const newProps: TNewProps = {
    className: clsx(classes, className),
    onClick,
    id,
  };

  return createElement(as, newProps, children);
}

const StyledComponentForwardedRefFunc: ForwardRefRenderFunction<HTMLInputElement, TStyledComponentForwardedRef> = ({
  as,
  className,
  styles,
  children,
  ...props
}, ref) => {
  const { onFocus, onChange, placeholder, value, type, id } = props;
  const classes = mapPropsToStyles(props, styles);
  const newProps: TNewPropsForwardedRef = {
    className: clsx(classes, className),
    id,
    type,
    ref,
    placeholder,
    value,
    onFocus,
    onChange,
  };

  return createElement(as, newProps, children);
}

const StyledComponent = StyledComponentFunc as FC<TStyledComponent>;
const StyledComponentForwardedRef = forwardRef(StyledComponentForwardedRefFunc);
export { StyledComponent, StyledComponentForwardedRef };
