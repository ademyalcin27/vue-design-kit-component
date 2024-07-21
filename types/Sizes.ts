export const Sizes = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
} as const;

export type Size = (typeof Sizes)[keyof typeof Sizes];
export type IconSizes = Size;
