import { RANKS_BASE_COLOR } from "@/constants";
import { generateRankColors, Rank } from "@/lib/colorUtils";

export const generateCardPalette = () => {
  // let css = ":root {";
  let style: Record<string, string> = {};
  const palette = generateRankColors();
  const ranks = Object.keys(RANKS_BASE_COLOR) as Array<Rank>;
  for (const rank of ranks) {
    const p = palette[rank];
    style[`--rank-${rank}-border-color`] = p.border;
    style[`--rank-${rank}-bg-color`] = p.bg;
    style[`--rank-${rank}-button-color`] = p.button;
    style[`--rank-${rank}-hover-color`] = p.hover;
  }
  return style as React.CSSProperties;
};
