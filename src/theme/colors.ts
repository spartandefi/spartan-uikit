import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#708090",
  primaryBright: "#708090",
  primaryDark: "#708090",
  secondary: "#8a0303",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fddc5c",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#8a0303",
  textDisabled: "#BDC2C4",
  textSubtle: "#8a0303",
  borderColor: "#fddc5c",
  card: "#fddc5c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8a0303",
  background: "#fddc5c",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  primaryDark: "#708090",
  tertiary: "#EFF4F5",
  text: "#8a0303",
  textDisabled: "#BDC2C4",
  textSubtle: "#8a0303",
  borderColor: "#fddc5c",
  card: "#fddc5c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
