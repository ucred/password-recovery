import { Form } from './Form';
import { Toaster } from '@/components/ui/toaster';
import { Error } from './Error';
import { Header } from '@/components/header';
import { getSession } from '@/functions/http/recoverPassword';

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const data = await getSession(id)

  return (
    <main className='w-screen h-screen bg-zinc-200 items-center flex justify-center p-4'>
      <div className='bg-white py-8 px-8 rounded-lg items-center shadow-sm max-w-2xl flex flex-col w-full h-382'>
        <Header />

        {data.success && <Form />}
        {!data.success && <Error />}
      </div>
      <Toaster />
    </main>
  );
}