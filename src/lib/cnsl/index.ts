import { colors } from '#lib/colors';
import { Logger } from '#types';

function applyStyle(style: string, text: string): string {
  return `${style}${text}\u001B[0m`;
}

const cnsl: Logger = {} as Logger;

for (const colorName of Object.keys(colors)) {
  const colorCode = `\u001B[38;5;${colors[colorName as keyof typeof colors]}m`;

  cnsl[colorName as keyof typeof colors] = (text: string) =>
    applyStyle(colorCode, text);

  if (!cnsl.bold) {
    cnsl.bold = {};
  }

  cnsl.bold[colorName as keyof typeof colors] = (text: string) =>
    applyStyle(`\u001B[1m${colorCode}`, text);
}

export default cnsl;
