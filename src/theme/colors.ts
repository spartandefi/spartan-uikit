import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#708090",
  primaryBright: "#708090",
  primaryDark: "#708090",
  secondary: "#bb0a1e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#a48111",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#bb0a1e",
  textDisabled: "#BDC2C4",
  textSubtle: "#bb0a1e",
  borderColor: "#a48111",
  card: "#a48111",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bb0a1e",
  background: "#a48111",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  primaryDark: "#708090",
  tertiary: "#EFF4F5",
  text: "#bb0a1e",
  textDisabled: "#BDC2C4",
  textSubtle: "#bb0a1e",
  borderColor: "#a48111",
  card: "#a48111",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
