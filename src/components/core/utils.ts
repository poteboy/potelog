export type HTMLTag = 'div' | 'p' | 'a' | 'span' | 'ul' | 'li' | 'section';

type LengthUnit = 'px' | 'em' | 'rem';
export type Length = `${number}${LengthUnit}`;
