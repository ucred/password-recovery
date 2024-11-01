import { CalendarX } from 'lucide-react';

export function Expired() {
  return (
    <div className='flex items-center justify-center flex-col gap-2 min-h-80'>
      <CalendarX className='size-24 text-zinc-400' />
      <span className='text-xl'>Link expirado</span>
    </div>
  )
}