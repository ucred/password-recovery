import { type ComponentProps, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Body } from './Body'
import { RightElement } from './RightElement'
import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'

interface SelectProps extends ComponentProps<'input'> {
  options: { value: string; label: string }[]
  errors?: string
  name: string
}

export function Select({ errors, options, name, className, ...rest }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { watch, setValue, register, clearErrors } = useFormContext()

  const _name = watch(name)

  const style = `z-10
            transition-colors
            rounded-lg
            size-full
            cursor-pointer
            py-1
            h-9
            pl-9
            pr-12
            first:pl-1.5
            last:pr-1.5
            outline-none
            ring-0
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
            border
            border-slate-200
            dark:border-zinc-800
            hover:border-emerald-600
            dark:hover:border-emerald-400
            focus:border-emerald-600
            dark:focus:border-emerald-400
            caret-slate-50
            dark:caret-zinc-900
            ${errors && 'bg-red-100 dark:bg-red-800/20 border-red-600 dark:border-red-400'}`

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (_name) clearErrors(name)
  }, [watch, clearErrors, _name, name])

  return (
    <Body onBlur={() => setTimeout(() => setIsOpen(false), 100)}>
      <input type="text" className={cn(style, className)} value={watch(name)} onClick={() => setIsOpen(!isOpen)} {...register(name)} {...rest} />

      <RightElement onClick={() => setIsOpen(!isOpen)}>
        <ChevronDown
          className={`size-4 ease-in-out selection:outline-none outline-none duration-200 ${errors ? 'text-red-600 dark:text-red-400' : 'text-zinc-400'} ${
            isOpen && 'rotate-180'
          }`}
        />
      </RightElement>

      {isOpen && (
        <ul className="absolute -mt-[126px] z-10 w-full dark:border dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg max-h-72 rounded-md  ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm">
          {options.map((option) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <li
              key={option.value}
              className="text-gray-900 dark:text-zinc-200 cursor-default select-none relative py-1 px-4 hover:bg-emerald-600 hover:text-white"
              onClick={() => {
                setValue(name, option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </Body>
  )
}
