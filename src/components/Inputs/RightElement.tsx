import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RightElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function RightElement({ children, className, ...rest }: RightElementProps) {
  return (
    <div
      className={cn(
        'group hover:text-emerald-600 absolute z-50 cursor-pointer inset-y-0 right-0 -mr-0.5 flex w-10 h-9  items-center justify-center rounded-r-md',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
