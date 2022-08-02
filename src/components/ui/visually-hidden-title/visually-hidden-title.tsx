import React, { ReactNode } from 'react';
import { VisuallyHiddenHeadline } from './stylde';

interface Props {
  size: number;
  children: ReactNode;
};

export function VisuallyHiddenTitle({size, children}: Props) {
  switch (size) {
    case 1:
      return (<VisuallyHiddenHeadline as="h1">
        {children}
      </VisuallyHiddenHeadline>);
    case 2:
      return (<VisuallyHiddenHeadline as="h2">
        {children}
      </VisuallyHiddenHeadline>);
    case 3:
      return (<VisuallyHiddenHeadline as="h3">
        {children}
      </VisuallyHiddenHeadline>);
    case 4:
      return (<VisuallyHiddenHeadline as="h4">
        {children}
      </VisuallyHiddenHeadline>);
    case 5:
      return (<VisuallyHiddenHeadline as="h5">
        {children}
      </VisuallyHiddenHeadline>);
    case 6:
      return (<VisuallyHiddenHeadline as="h6">
        {children}
      </VisuallyHiddenHeadline>);
    default:
      return null;
  }
}
