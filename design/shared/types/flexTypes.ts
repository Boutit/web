export type FlexValue = 'flex-start' | 'flex-end' | 'center';
export type FlexSpaceValue = 'space-between' | 'space-around';

export type FlexStyles = {
  alignContent?: FlexValue;
  alignItems?: FlexValue;
  alignSelf?: FlexValue;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: number;
  justifyContent?: FlexValue | FlexSpaceValue;
};
