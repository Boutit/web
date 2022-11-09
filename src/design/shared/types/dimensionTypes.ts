export type PercentageValue = string;
export type FixedValue = number | string;
export type DimensionValue = 'auto' | FixedValue | PercentageValue;

export type DimensionStyles = {
  height?: DimensionValue;
  width?: DimensionValue;
  maxHeight?: DimensionValue;
  minHeight?: DimensionValue;
  maxWidth?: DimensionValue;
  minWidth?: DimensionValue;
};
