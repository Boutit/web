import { backgroundAliases, foregroundAliases } from '../aliases/aliases';

export type ButtonVariant = 'primary';

type ButtonVariantConfig = {
  color: keyof typeof foregroundAliases;
  backgroundColor: keyof typeof backgroundAliases;
};

const buttonVariants: Record<ButtonVariant, ButtonVariantConfig> = {
  primary: {
    color: 'foreground',
    backgroundColor: 'primary',
  },
};

export const getButtonStyles = (
  buttonVariant: ButtonVariant,
): ButtonVariantConfig => {
  return buttonVariants[buttonVariant];
};
