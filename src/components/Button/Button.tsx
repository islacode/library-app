import React, { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string,
}

export default function Button(props: ButtonProps) {
  const {title, ...rest} = props
  return (
    <button {...rest}>{title}</button>
  )
}
