'use client'

import { Input } from '@/components/Inputs'
import { PasswordCriteria } from '@/components/PasswordCriteria'
import { PasswordStrengthLevel } from '@/components/PasswordStrengthLevel'
import { Button } from '@/components/ui/button'
import { submitForm } from '@/functions/http/recoverPassword'
import { useToast } from '@/hooks/use-toast'
import { formSchema, FormSchemaType } from '@/schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect, useParams } from 'next/navigation'
import { Success } from './Success'

export function Form() {
  const [passVisibilit, setPassVisibilit] = useState<string>('password')
  const [confirmPassVisibilit, setConfirmPassVisibilit] = useState<string>('password')
  const [isSuccess, setIsSucess] = useState(false)

  const params = useParams()

  const { toast } = useToast()

  const { register, formState: { errors }, watch, handleSubmit } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const password = watch('password')

  async function _submitForm({ password }: { password: string }) {
    if (!params.id) return
    if (typeof params.id === 'object') return

    const response = await submitForm(params.id, password)

    if (!response.success) {
      return (
        toast({
          title: `Falha ao cadastrar senha`,
          description: (
            <div className='flex flex-col gap-3'>
              <p>Tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte</p>
              <p className='text-[10px]'>{new Date().toLocaleString()}</p>
            </div>
          ),
          duration: 5000,
          variant: 'destructive',
          dir: 'top',
        })
      )
    }

    toast({
      title: "Convite enviado com sucesso",
      description: 'Em breve, o usuário receberá um e-mail para se cadastrar a plataforma',
      duration: 5000,
      variant: 'sucess',
      dir: 'top',
    })

    setIsSucess(true)
  }

  useEffect(() => {
    if (!isSuccess) return

    setTimeout(() => redirect(`${process.env.NEXT_PUBLIC_GUARANTEE_URL}`), 5000)
  }, [isSuccess])

  return (
    <>
      {!isSuccess
        ? (
          <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(_submitForm)}>
            <div className='flex flex-col w-full justify-center items-center mb-6'>
              <span className='font-medium flex text-zinc-500 text-xl'>Recuperação de senha</span>
              <span className='text-sm text-zinc-700'>Por favor, informe uma nova senha</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:gap-8 gap-4'>
              <PasswordCriteria password={password} />

              <div className='flex flex-col gap-4 flex-1'>
                <Input.Root>
                  <Input.Label>Senha</Input.Label>
                  <Input.Body>
                    <Input.Input
                      type={passVisibilit}
                      register={register('password')}
                      errors={errors.password?.message}
                    />
                    <Input.RightElement>
                      <Button
                        type='button'
                        className="w-9 bg-inherit p-0 focus:ring-0 text-slate-500 shadow-none hover:bg-inherit hover:text-slate-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                        onClick={passVisibilit === 'password' ? () => setPassVisibilit('text') : () => setPassVisibilit('password')}
                      >
                        {passVisibilit === 'password' ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                      </Button>
                    </Input.RightElement>
                  </Input.Body>
                  <Input.Errors errors={errors.password?.message} />
                  <PasswordStrengthLevel password={password} />
                </Input.Root>


                <Input.Root className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-6">
                  <Input.Label>Confirmar senha</Input.Label>
                  <Input.Body>
                    <Input.Input
                      type={confirmPassVisibilit}
                      register={register('confirmPassword')}
                      errors={errors.confirmPassword?.message}
                    />
                    <Input.RightElement>
                      <Button
                        type='button'
                        className="w-9 bg-inherit p-0 focus:ring-0 text-slate-500 shadow-none hover:bg-inherit hover:text-slate-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                        onClick={confirmPassVisibilit === 'password' ? () => setConfirmPassVisibilit('text') : () => setConfirmPassVisibilit('password')}
                      >
                        {confirmPassVisibilit === 'password' ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                      </Button>
                    </Input.RightElement>
                  </Input.Body>
                  <Input.Errors errors={errors.confirmPassword?.message} />
                </Input.Root>
              </div>
            </div>

            <div className='flex w-full items-center justify-center sm:justify-end'>
              <Button type='submit' className='bg-emerald-600 hover:bg-emerald-500 text-white w-full sm:w-24'>Salvar</Button>
            </div>
          </form>
        )
        : <Success />
      }
    </>
  )
}