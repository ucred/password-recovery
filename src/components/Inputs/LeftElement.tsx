import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RightElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function LeftElement({ children, className, ...rest }: RightElementProps) {
  return (
    <div
      className={twMerge('pointer-events-none absolute inset-y-0 left-0 z-20 flex h-full w-10 items-center justify-center rounded-l-md', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
