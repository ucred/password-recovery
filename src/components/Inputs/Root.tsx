import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root({ children, className, ...rest }: RootProps) {
  return (
    <div className={twMerge('flex w-full flex-col gap-1', className)} {...rest}>
      {children}
    </div>
  )
}
