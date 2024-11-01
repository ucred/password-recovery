'use client'

import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import InputMask from 'comigo-tech-react-input-mask'

interface InputProps extends ComponentProps<'input'> {
  errors?: string
  mask?: string
  name?: string
  register?: any
}

export function InputData({ errors, mask, name, register, className, ref, ...rest }: InputProps) {
  const style = `z-10
            transition-colors
            rounded-lg
            size-full
            py-1
            h-9
            pl-9
            pr-12
            first:pl-1.5
            last:pr-1.5
            ring-0
            outline-none
            ring-inset
            focus:ring-0
            dark:focus:ring-0
            text-sm
            md:text-sm
            placeholder:text-slate-600
            placeholder:opacity-50
            dark:placeholder:text-zinc-300
            dark:placeholder:opacity-70
            bg-slate-50
            dark:bg-zinc-900
            disabled:bg-zinc-200
            dark:disabled:bg-zinc-900
            disabled:text-zinc-400
            dark:disabled:text-zinc-600
            border
            border-slate-200
            dark:border-zinc-800
            disabled:hover:border-zinc-200
            dark:disabled:hover:border-zinc-900
            dark:disabled:cursor-not-allowed
            disabled:cursor-not-allowed
            hover:border-emerald-600
            dark:hover:border-emerald-400
            focus:border-emerald-600
            dark:focus:border-emerald-400
            caret-emerald-500
            ${errors && 'bg-red-100 dark:bg-red-800/20 border-red-600 dark:border-red-400'}`

  return <InputMask ref={ref} name={name} mask={mask} maskPlaceholder="" className={cn(style, className)} {...register} {...rest} />
}
