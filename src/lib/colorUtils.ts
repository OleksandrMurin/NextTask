import { RANKS_BASE_COLOR } from "./../constants";
var hexToHsl = require("hex-to-hsl");

export type Rank = keyof typeof RANKS_BASE_COLOR;
interface RankPaletteBase {
  h: number;
  s: number;
  border: number;
  bg: number;
  button: number;
  hover: number;
}

export function makeRankPalette(hex: string): RankPaletteBase {
  const hsl = hexToHsl(hex);
  return {
    h: hsl[0],
    s: hsl[1],
    border: Math.max(hsl[2] - 15, 0),
    bg: Math.min(hsl[2] + 37, 100),
    button: Math.min(hsl[2] + 30, 100),
    hover: Math.min(hsl[2] + 15, 100),
  };
}

export interface RankCSSValues {
  border: string;
  bg: string;
  button: string;
  hover: string;
}

export function generateRankColors() {
  const result = {} as Record<Rank, RankCSSValues>;
  const ranks = Object.keys(RANKS_BASE_COLOR) as Array<Rank>;

  for (const rank of ranks) {
    const hex = RANKS_BASE_COLOR[rank];
    const { h, s, border, bg, button, hover } = makeRankPalette(hex);
    result[rank] = {
      border: `hsl(${h}, ${s}%, ${border}%)`,
      bg: `hsl(${h + 10}, ${s}%, ${bg}%)`,
      button: `hsl(${h}, ${s + 30}%, ${button}%)`,
      hover: `hsl(${h}, ${s + 30}%, ${hover}%)`,
    };
  }
  console.log(result);
  return result;
}
