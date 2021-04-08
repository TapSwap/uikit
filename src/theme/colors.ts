import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#ce14d6", //
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a",
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA", //
  backgroundDisabled: "#E9EAEB", //
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4", //
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#965c13",
  textDisabled: "#BDC2C4", //
  textSubtle: "#9B99C9", //
  borderColor: "#E9EAEB",
  card: "#FFFFFF", //
  nav: "#ffffff", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#CE14D6", //
  background: "#343135", //
  backgroundDisabled: "#3C3742", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A", //
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A",
  text: "#fcfae2",
  textDisabled: "#575361", //
  textSubtle: "#c9c4d4", //
  borderColor: "#61634b",
  card: "#27262c", //
  nav: "#27262c", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0B101B 0%, #0B101B 100%)",
  },
};
