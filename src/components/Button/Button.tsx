import React, { HtmlHTMLAttributes } from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return <button {...rest}>{title}</button>;
}
