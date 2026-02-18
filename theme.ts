// theme.ts
import { vars } from "nativewind";

// Professional Healthcare Theme - Indigo/Slate
export const lightTheme = vars({
  "--radius": "12",

  // Core semantic colors - Clean white background with indigo accents
  "--background": "255 255 255",
  "--foreground": "15 23 42", // Slate 900

  "--card": "255 255 255",
  "--card-foreground": "15 23 42",

  "--popover": "255 255 255",
  "--popover-foreground": "15 23 42",

  // Primary: Indigo 600 - Trustworthy, professional healthcare feel
  "--primary": "79 70 229",
  "--primary-foreground": "255 255 255",

  // Secondary: Indigo 50 - Soft backgrounds
  "--secondary": "238 242 255",
  "--secondary-foreground": "49 46 129",

  "--muted": "241 245 249", // Slate 100
  "--muted-foreground": "100 116 139", // Slate 500

  "--accent": "224 231 255", // Indigo 100
  "--accent-foreground": "30 27 75", // Indigo 950

  "--destructive": "220 38 38",
  "--destructive-foreground": "255 255 255",

  "--border": "226 232 240", // Slate 200
  "--input": "241 245 249",
  "--ring": "79 70 229",

  // Chart colors for medical data visualization
  "--chart-1": "79 70 229", // Indigo
  "--chart-2": "16 185 129", // Emerald
  "--chart-3": "245 158 11", // Amber
  "--chart-4": "236 72 153", // Pink
  "--chart-5": "14 165 233", // Sky

  // Sidebar colors
  "--sidebar": "248 250 252", // Slate 50
  "--sidebar-foreground": "15 23 42",
  "--sidebar-primary": "79 70 229",
  "--sidebar-primary-foreground": "255 255 255",
  "--sidebar-accent": "238 242 255",
  "--sidebar-accent-foreground": "49 46 129",
  "--sidebar-border": "226 232 240",
  "--sidebar-ring": "79 70 229",
});

export const darkTheme = vars({
  "--radius": "12",

  // Dark mode: Deep slate with vibrant indigo
  "--background": "2 6 23", // Slate 950
  "--foreground": "248 250 252", // Slate 50

  "--card": "15 23 42", // Slate 900
  "--card-foreground": "248 250 252",

  "--popover": "15 23 42",
  "--popover-foreground": "248 250 252",

  // Primary: Indigo 500 - Slightly lighter for dark mode visibility
  "--primary": "99 102 241",
  "--primary-foreground": "255 255 255",

  "--secondary": "30 27 75", // Indigo 950
  "--secondary-foreground": "224 231 255",

  "--muted": "30 41 59", // Slate 800
  "--muted-foreground": "148 163 184", // Slate 400

  "--accent": "49 46 129", // Indigo 950
  "--accent-foreground": "224 231 255",

  "--destructive": "239 68 68",
  "--destructive-foreground": "255 255 255",

  "--border": "30 41 59", // Slate 800
  "--input": "30 41 59",
  "--ring": "99 102 241",

  // Chart colors adjusted for dark mode
  "--chart-1": "99 102 241",
  "--chart-2": "52 211 153",
  "--chart-3": "251 191 36",
  "--chart-4": "244 114 182",
  "--chart-5": "56 189 248",

  "--sidebar": "15 23 42",
  "--sidebar-foreground": "248 250 252",
  "--sidebar-primary": "99 102 241",
  "--sidebar-primary-foreground": "255 255 255",
  "--sidebar-accent": "30 27 75",
  "--sidebar-accent-foreground": "224 231 255",
  "--sidebar-border": "30 41 59",
  "--sidebar-ring": "99 102 241",
});