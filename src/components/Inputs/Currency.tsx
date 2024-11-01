'use client'

import { NumericFormat, type NumericFormatProps } from 'react-number-format'

import { cn } from '@/lib/utils'
import { Controller } from 'react-hook-form'

interface InputProps extends NumericFormatProps {
  errors?: string
  control: any
  name: string
}

export function Currency({ errors, className, control, name, ...rest }: InputProps) {
  const style = `z-10
            transition-colors
            rounded-lg
            size-full
            py-2
            pl-10
            pr-12
            first:pl-2
            last:pr-2
            ring-0
            ring-inset
            focus:ring-0
            dark:focus:ring-0
            text-sm
            md:text-base
            placeholder:text-slate-600
            placeholder:opacity-50
            dark:placeholder:text-zinc-300
            dark:placeholder:opacity-70
            bg-slate-50
            dark:bg-zinc-900
            disabled:bg-slate-200
            dark:disabled:bg-zinc-900
            disabled:text-zinc-400
            dark:disabled:text-zinc-600
            border
            border-slate-200
            dark:border-zinc-800
            hover:border-emerald-600
            dark:hover:border-emerald-400
            disabled:hover:border-zinc-200
            dark:disabled:hover:border-zinc-900
            focus:border-emerald-600
            dark:focus:border-emerald-400
            caret-emerald-500
            outline-emerald-600
            ${errors && 'bg-bgError dark:bg-bgError-dark border-brError dark:border-brError-dark'}`

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <NumericFormat
          getInputRef={ref}
          decimalScale={2}
          decimalSeparator=","
          thousandSeparator="."
          allowedDecimalSeparators={[',']}
          fixedDecimalScale
          allowLeadingZeros={false}
          allowNegative={false}
          className={cn(`${style}`, className)}
          value={value}
          onValueChange={(values) => {
            onChange(values.floatValue)
          }}
          {...rest}
        />
      )}
    />
  )
}
