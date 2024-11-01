import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode | string
}

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <span className={twMerge('font-medium text-xs md:text-xs text-slate-600 dark:text-zinc-400 antialiased w-fit font-poppins', className)} {...rest}>
      {children}
    </span>
  )
}
