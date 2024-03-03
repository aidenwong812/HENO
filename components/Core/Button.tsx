// @ts-nocheck
/* eslint-disable */
import { FC, ReactNode } from "react"

interface ButtonProps {
  id?: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  id = "button",
  children,
  className,
  onClick,
  type,
  ...rest
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <button
      id={id}
      type={type || "button"}
      className={`hover:scale-[1.1] scale-[1] transition duration-[300ms] px-[28px] py-[11px] font-bold font-quicksand 
        uppercase text-black rounded bg-white 
        shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)]
        flex items-center justify-center gap-[10px]
        ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
