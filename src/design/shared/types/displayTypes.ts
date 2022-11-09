export type DisplayValue =
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'none'
  | 'contents';

export type DisplayType = {
  display?: DisplayValue;
};
