"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

const RadioGroupContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
}>({})

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange }}>
        <div className={cn("grid gap-2", className)} {...props} ref={ref}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  },
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext)

    const handleChange = () => {
      context.onValueChange?.(value)
    }

    return (
      <div className="relative">
        <input
          type="radio"
          ref={ref}
          className={cn(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-background",
            className,
          )}
          checked={context.value === value}
          onChange={handleChange}
          value={value}
          {...props}
        />
        <div className="absolute inset-1 rounded-full bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none" />
      </div>
    )
  },
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
