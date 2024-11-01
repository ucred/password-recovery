import { checkPasswordCriteria } from '@/functions/checkPasswordCriteria';
import { CircleCheck } from 'lucide-react'

export function PasswordCriteria({ password }: { password: string }) {
  const criteria = checkPasswordCriteria(password)

  const eightcharacters = criteria?.some((data) => data === 'Tem pelo menos 8 caracteres')
  const hasNumber = criteria?.some((data) => data === 'Contém números')
  const hasUppercase = criteria?.some((data) => data === 'Contém letras maiúsculas')
  const hasLowercase = criteria?.some((data) => data === 'Contém letras minúsculas')
  const specialCharacter = criteria?.some((data) => data === 'Contém caracteres especiais')

  return (
    <div className="flex justify-end flex-col gap-0.5">
      <span className="text-sm text-zinc-600 dark:text-zinc-200">A senha deve ter no mínimo:</span>

      <div className="flex gap-1 items-center">
        <CircleCheck
          data-criteria={eightcharacters}
          className="size-3 data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        />
        <span
          data-criteria={eightcharacters}
          className="text-xs data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        >
          8 caracteres
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <CircleCheck
          data-criteria={hasNumber}
          className="size-3 data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        />
        <span
          data-criteria={hasNumber}
          className="text-xs data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        >
          Um número
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <CircleCheck
          data-criteria={hasUppercase}
          className="size-3 data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        />
        <span
          data-criteria={hasUppercase}
          className="text-xs data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        >
          Uma letra maiúscula
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <CircleCheck
          data-criteria={hasLowercase}
          className="size-3 data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        />
        <span
          data-criteria={hasLowercase}
          className="text-xs data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        >
          Uma letra minúscula
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <CircleCheck
          data-criteria={specialCharacter}
          className="size-3 data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        />
        <span
          data-criteria={specialCharacter}
          className="text-xs data-[criteria=true]:text-emerald-600 dark:data-[criteria=true]:text-emerald-400 data-[criteria=false]:text-zinc-500 dark:text-zinc-300"
        >
          Um caractere especial
        </span>
      </div>
    </div>
  )
}
