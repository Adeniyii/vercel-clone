export const COLORS = {
  white: "#FFF",
  black: "#000",
  gray: {
    50: "#f8f8f8",
    100: "#f2f2f2",
    200: "#eaeaea",
    300: "#cccccc",
    400: "#aaaaaa",
    500: "#888888",
    600: "#666666",
    700: "#444444",
    800: "#2A2A2A",
    900: "#111111",
  },
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const Z_INDICES = {
  hero: 1,
  mainContent: 10,
  header: 100,
};

export const FAMILIES = {
  serif:
    '"Iowan Old Style", "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  sansSerif:
    '"-apple-system", "BlinkMacSystemFont", "avenir next", "avenir", "segoe ui", "helvetica neue", "helvetica", "Ubuntu", "roboto", "noto", arial, "sans-serif"',
};

// export const READING_WIDTH = 850;
// export const EXTRA_WIDE_WIDTH = 1024;

// const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

// const userAgent =
//   typeof window !== "undefined" ? window.navigator.userAgent : "node";

// export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);
