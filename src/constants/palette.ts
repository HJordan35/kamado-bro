export enum PaletteKey {
  pure_white = "pure_white",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  accent = "accent",
  heading = "heading",
  text = "text",
  background = "background",
}

type ColorPalette = {
  [key in PaletteKey]: string;
};

export const Palette: ColorPalette = {
  pure_white: "var(--pure-white)",
  primary: "var(--primary-color)",
  secondary: "var(--secondary-color)",
  tertiary: "var(--tertiary-color)",
  accent: "var(--accent-color)",
  heading: "var(--heading-color)",
  text: "var(--text-color)",
  background: "var(--background)",
};
