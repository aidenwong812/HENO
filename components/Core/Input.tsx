import { ChangeEventHandler, useEffect, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type?: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
}

function Input({
  id,
  name,
  value,
  type = "text",
  placeholder,
  hookToForm = false,
  onChange,
  className,
  clasNameError,
  disabled,
}: IInput) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef() as any
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext
  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  useEffect(() => {
    if (inputRef.current) {
      if (isFocused) {
        inputRef.current.focus()
        return
      }
      inputRef.current.blur()
    }
  }, [isFocused])

  return (
    <div className="relative flex flex-col">
      <input
        {...(id && { id })}
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        className={`bg-black border-gray_1 border-[2px]
          text-gray_1 font-dresden
        w-full p-2 focus:!ring-0 focus:!outline-none focus:!border-gray_1
        ${className || ""} ${hookToForm && fieldError && fieldError?.message ? clasNameError : ""}`}
        {...(!hookToForm && {
          value,
          onChange,
        })}
        {...(isFullyHooked
          ? formContext.register(name, {
              onChange: (e) => onChange && onChange(e),
            })
          : {})}
        name={name}
        disabled={disabled}
        onTouchStart={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red text-[9.5px] md:text-[12px] pt-[5px] text-left">
          {fieldError?.message as string}
        </p>
      )}
    </div>
  )
}

export default Input
