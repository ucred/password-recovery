import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BodyPorps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Body({ children, className, ...rest }: BodyPorps) {
  return (
    <div className={twMerge('relative flex h-9 w-full items-center justify-center', className)} {...rest}>
      {children}
    </div>
  )
}
