import Image from 'next/image'

import avatar from '../../assets/avatar.jpeg'

export function About() {
  return (
    <section id='sobre' className='h-screen  bg-sobre_bg bg-cover bg-center'>

      <div className='w-full h-full flex flex-col items-center backdrop-blur-sm gap-4'>
        <h2 className='lg:text-4xl text-2xl lg:mt-12 mt-6 text-center font-bold underline underline-offset-8 decoration-4 decoration-[#F72585] text-neutral-200'>Sobre mim</h2>


        <div
          className='flex items-center justify-between max-md:flex-col max-w-[960px] min-h-[500px] lg:translate-y-[calc(50%-6rem)] gap-3 rounded-xl p-12 bg-white/20 '
        >

          <div className='md:bg-white lg:h-[80%] md:w-full h-[200px] w-[200px] rounded-full p-5 md:rounded-xl md:shadow-inner shadow-gray-300 flex justify-center'>
            <Image className='max-md:p-2 bg-white ring-2 ring-[#B5179E] object-cover max-md:rounded-full rounded-2xl' src={avatar} alt='' height={320} />
          </div>

          <article className='flex flex-col justify-center items-center bg-white max-h-[80%] p-5 rounded-xl shadow-inner shadow-gray-300'>
            <p className='text-justify text-xl font-sans font-thin text-neutral-600 max-md:text-base'>
              Formado em Ciência da computação, pela Faculdade Anhanguera de Bauru, em 2021.
              Estou atualmente no caminho para o fullstack utilizando javascript como principal linguagem,
              as tecnologias envolvidas nessa jornada são, principalmente,  React, React Native e NodeJs no Backend
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}