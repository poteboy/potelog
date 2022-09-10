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
} as const;

export const headingTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
} as const;

export type HeadingTag = keyof typeof headingTags;
export type HTMLTag = keyof typeof htmlTags;
