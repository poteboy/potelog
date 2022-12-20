/* eslint-disable react/display-name */
import { ReactNode, createElement, useEffect, useLayoutEffect } from "react";
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
export function css(strings: any, ...interpolations: string[]) {
  const styleString = interleave(strings, interpolations);
  const className = `css-${id}`;
  id += 1;
  const rule = `.${className} { ${styleString} }`;
  return { className, rule };
}

export const styled =
  <T extends keyof HTMLElementTagNameMap>(element: T) =>
  // eslint-disable-next-line react/display-name
  (strings: any, ...interpolations: string[]) => {
    const { className, rule } = css(strings, ...interpolations);
    return <Props extends unknown>(arg: ComponentArgument<Props>) => {
      const { children, ...props } = arg;

      useEffect(() => {
        if (isBrowser) {
          document.createElement("style").sheet?.insertRule(rule);
        }
      });

      return (
        <>
          {createElement(element, { className, ...props }, children)}
          {!isBrowser && <style>{rule}</style>}
        </>
      );
    };
  };

type ComponentArgument<T> = { children: ReactNode } & T;
