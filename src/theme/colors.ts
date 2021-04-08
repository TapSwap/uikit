import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#CE14D6", //
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#452A7A", //
  secondaryDark: "#9A6AFF", //
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
  tertiary: "#CE14D6", //
  text: "#452A7A", //
  textDisabled: "#BDC2C4", //
  textSubtle: "#CE14D6", //
  borderColor: "#E9EAEB",
  card: "#FFFFFF", //
  nav: "#ffffff", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ffebf4 0%, #e0eeff 100%)",
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
  tertiary: "#CE14D6", //
  text: "#EAE2FC", //
  textDisabled: "#666171", //
  textSubtle: "#CE14D6", //
  borderColor: "#61634b",
  card: "#27262c", //
  nav: "#27262c", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #232228 0%, #232228 100%)", //
  },
};
