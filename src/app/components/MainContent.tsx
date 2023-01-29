import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

export function MainContent() {
  return (
    <div className='h-screen bg-background_teste bg-center bg-cover'>
      <aside className='absolute top-[50%] z-10 -translate-y-[calc(50%-45px)] max-lg:hidden'>
        <div className='flex flex-col justify-center items-center p-3 rounded bg-slate-300 ml-5 gap-3 shadow-md shadow-gray-800'>

          <a href="https://www.linkedin.com/in/leoaugustosoliveira" className='hover:animate-bounce'>
            <FaLinkedin size={38} />
          </a>

          <a href="https://github.com/xinefsiamed" className='hover:animate-bounce'>
            <FaGithubSquare size={38} />
          </a>

          <a href="mailto:leonardoaugusto.soliveira@outlook.com" className='hover:animate-bounce'>
            <AiFillMail size={38} />
          </a>

        </div>

      </aside>

      <section className='h-full w-full flex flex-col justify-center items-center gap-4 px-3 backdrop-blur-sm text-center'>

        <p className='lg:text-6xl  text-4xl font-bold text-zinc-100'>Olá, meu nome é Leonardo</p>
        <div className='lg:inline-block'>
          <span className='lg:text-2xl text-xl text-zinc-400 mt-4 lg:inline-block overflow-hidden lg:whitespace-nowrap lg:animate-type  font-mono'>
            Sou desenvolvedor web, com foco em backend
          </span>
        </div>
      </section>
    </div>
  )
}