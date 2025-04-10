import React from "react";

const enum Sizes {
  big = 'big',
  middle = 'middle',
  small = 'small',
}

const enum Types {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

interface IBtnProps {
  children: React.ReactNode;
  size: Sizes;
  type: Types;
  outline?: boolean;
  className?: string;
}

const Btn:React.FC<IBtnProps> = ({children, size, type=Types.button, outline=false, className}) => {
  return (
    <button className={`${className} btn btn-${size} ${outline && `btn-outline`}`} type={type}>{children}</button>
  )
}

export {Sizes, Types}
export default Btn
