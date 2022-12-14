type LengthUnit = 'px' | 'em' | 'rem' | '%';
export type Length = `${number}${LengthUnit}`;

export const htmlTags = {
  div: 'div',
  a: 'a',
  p: 'p',
  span: 'span',
  li: 'li',
  ul: 'ul',
  section: 'section',
  button: 'button',
  aside: 'aside',
  article: 'article',
  main: 'main',
} as const;

export const headingTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  div: 'div'
} as const;

export type HeadingTag = keyof typeof headingTags;
export type HTMLTag = keyof typeof htmlTags;

export const justifyContent = {
  between: 'space-between',
  arount: 'space-arount',
  evenly: 'space-evenly',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  normal: 'normal',
} as const;

export type Justify = keyof typeof justifyContent;
export type JustifyContent = typeof justifyContent[Justify];

export const alignItems = {
  normal: 'normal',
  stretch: 'stretch',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
} as const;

export type Align = keyof typeof alignItems;
export type AlignItems = typeof alignItems[Align];


export const fontFamilies = {
  monospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  verdana: "Verdana, Geneva, Tahoma, sans-serif",
  wotfard: "'Wotfard',Futura,-apple-system,sans-serif"
}

export default {}