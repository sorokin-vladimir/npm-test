type TLogoSize = 's' | 'm' | 'l';
type TLogoShape = 'circle' | 'square';
type TLogoTheme = 'light' | 'dark';

type TLogo = {
  size?: TLogoSize;
  url: string;
  name: string;
  shape?: TLogoShape;
  theme?: TLogoTheme;
};

export {
  TLogo,
  TLogoSize,
  TLogoShape,
  TLogoTheme,
};
