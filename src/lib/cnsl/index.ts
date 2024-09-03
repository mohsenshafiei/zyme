import { colors } from "../colors";

// Types
import { ColorMethod, Logger } from "../../types";

function applyStyle(style: string, text: string): string {
  return `${style}${text}\x1b[0m`;
}

const cnsl: Logger = {} as Logger;

Object.keys(colors).forEach((colorName) => {
  const colorCode = `\x1b[38;5;${colors[colorName as keyof typeof colors]}m`;

  cnsl[colorName as keyof typeof colors] = (text: string) =>
    applyStyle(colorCode, text);
  if (!cnsl.bold) {
    cnsl.bold = {};
  }

  cnsl.bold[colorName as keyof typeof colors] = (text: string) =>
    applyStyle(`\x1b[1m${colorCode}`, text);
});

export default cnsl;
