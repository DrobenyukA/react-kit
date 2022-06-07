import React, { FC, HTMLAttributes, ReactNode, useEffect } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  useEffect(() => {
    console.log('<Thing /> rendered in Beta');
  }, []);
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
