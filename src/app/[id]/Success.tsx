import { CircleCheckBig } from 'lucide-react';

export function Success() {
  return (
    <div className='flex items-center justify-center flex-col gap-2 min-h-80'>
      <CircleCheckBig className='size-24 text-emerald-500 animate-bounce' />
      <span className='text-xl font-medium text-emerald-600'>Senha alterada com sucesso!</span>
      <span className='text-base -mt-2'>Você será redirecionado para a página de login...</span>
    </div>
  )
}