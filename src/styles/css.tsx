/* eslint-disable react/display-name */
import { HTMLProps, ReactNode, createElement, ComponentProps } from "react";
import { render } from "react-dom";

let isBrowser = typeof document !== "undefined";

function interleave(strings: string[], interpolations: string[]) {
  return strings.reduce(
    (final, str, i) =>
      final + str + (interpolations[i] === undefined ? "" : interpolations[i]),
    ""
  );
}

let id = 0;
const cache = new Map<string, number>();

export function css(strings: any, ...interpolations: string[]) {
  const styleString = interleave(strings, interpolations);
  const newId = cache.has(styleString) ? cache.get(styleString) : id;
  const isCached = cache.has(styleString);
  const className = `css-${newId}`;
  cache.set(styleString, id);
  id += 1;
  const rule = `.${className} { ${styleString} }`;
  return { className, rule, isCached };
}

// keyof HTMLElementTagNameMap is too slow
type HTMLTagName = "div" | "p" | "a" | "section" | "h1" | "h2";

export const styled =
  <T extends HTMLTagName>(element: T) =>
  // eslint-disable-next-line react/display-name
  (strings: any, ...interpolations: string[]) => {
    const { className, rule, isCached } = css(strings, ...interpolations);
    return <Props extends unknown>(arg: ComponentArgument<Props, T>) => {
      const { children, ...props } = arg;
      return (
        <>
          {createElement(element, { className, ...props }, children)}
          {!isCached && <style>{rule}</style>}
        </>
      );
    };
  };

type ComponentArgument<T, E extends keyof JSX.IntrinsicElements> = {
  children: ReactNode;
} & T &
  ComponentProps<E>;
