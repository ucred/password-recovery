'use client'

import { calculatePasswordStrength } from '@/functions/calculatePasswordStrength'
import { useEffect, useState } from 'react'

export function PasswordStrengthLevel({ password }: { password?: string }) {
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState<'Senha fraca' | 'Senha média' | 'Senha forte'>('Senha fraca')
  const [progressBarStyle, setProgressBarStyle] = useState('w-0')

  useEffect(() => {
    if (password) {
      const strength = calculatePasswordStrength(password)

      if (strength < 30) {
        setPasswordStrengthLevel('Senha fraca')
        setProgressBarStyle('w-1/3 bg-red-500 dark:bg-red-400')
      }
      if (strength >= 30 && strength <= 90) {
        setPasswordStrengthLevel('Senha média')
        setProgressBarStyle('w-2/3 bg-yellow-500 dark:bg-yellow-400')
      }

      if (strength >= 90) {
        setProgressBarStyle('bg-emerald-500 dark:bg-emerald-500')
        setPasswordStrengthLevel('Senha forte')
      }
    }
  }, [password])

  return (
    <div className="flex flex-col gap-0.5">
      <div className="h-2 w-full bg-zinc-200 shadow-inner dark:bg-zinc-900 rounded-full">
        <div className={`h-2 rounded-full ${progressBarStyle}`} />
      </div>
      <span className="text-[10px] text-zinc-500">{passwordStrengthLevel}</span>
    </div>
  )
}
