import { ChangeEventHandler, useEffect, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"

interface ITextArea {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  hookToForm: boolean
  clasNameError?: string
  disabled?: boolean
  rows?: number
}

function TextArea({
  id,
  name,
  value,
  hookToForm = false,
  onChange,
  className,
  clasNameError,
  rows = 1,
}: ITextArea) {
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef() as any
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  useEffect(() => {
    if (textareaRef.current) {
      if (isFocused) {
        textareaRef.current.focus()
        return
      }
      textareaRef.current.blur()
    }
  }, [isFocused])

  return (
    <div className="relative">
      <textarea
        {...(id && { id })}
        value={value}
        className={`text-gray_1 w-full border-[2px] !border-gray_1 bg-black
          focus:ring-0 focus:border-gray_1 
          ${className || ""} ${
          hookToForm && fieldError && fieldError?.message ? clasNameError : ""
        }`}
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
        rows={rows}
        onTouchStart={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={textareaRef}
      />

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red text-[9.5px] md:text-[12px] text-left text-[12px]">
          {fieldError?.message as string}
        </p>
      )}
    </div>
  )
}

export default TextArea
