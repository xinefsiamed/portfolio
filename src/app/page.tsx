import { FormEvent } from 'react'
import { About } from './components/About'
import { ContactForm } from './components/ContactForm'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'

const topicsColors = {
  reactjs: '#4895EF',
  nodejs: '#70E000',
  'react-native': '#90E0EF'
}

type topicColors = {
  name: 'reactjs' | 'nodejs' | 'unknown'
}

const topicFontColors = {
  reactjs: '#4361EE',
  nodejs: '#38B000',
  'react-native': '#00B4D8'
}

interface Repository {
  id: string,
  name: string,
  html_url: string,
  homepage?: string
  topics?: string[]
}

export default async function Home() {

  const response = await fetch('https://api.github.com/users/xinefsiamed/repos', {
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  const repositories: Repository[] = await response.json()

  return (
    <div>

      <Header />
      <MainContent />
      <About />

      <section id='projetos' className='h-screen bg-projetos_bg bg-cover bg-center'>
        <div className='w-full h-full flex flex-col items-center backdrop-blur-sm gap-4'>
          <h2 className='lg:text-4xl lg:mt-12 mt-8 text-2xl  text-center font-bold underline underline-offset-8 decoration-4 decoration-[#F72585] text-neutral-200'>Projetos</h2>


          <div className='w-[80%] h-[80%] rounded-lg bg-white/80 mx-auto my-0  mt-5 flex flex-col lg:justify-center flex-wrap gap-2 lg:p-12 p-4 overflow-scroll no-scrollbar'>

            {
              repositories.map(repo => {
                return (
                  <a key={repo.id} href={repo.homepage ? repo.homepage : repo.html_url} className='hover:animate-pulse'>
                    <div className='bg-white rounded-xl lg:w-[200px] lg:h-[150px] w-[140px] h-[120px] lg:p-4 p-1 shadow shadow-black/30 flex  flex-col justify-between'>
                      <h3 className='text-[#560BAD] font-bold font-mono break-words text text-sm'>{repo.name}</h3>
                      <footer>
                        <p>Linguagens: </p>
                        <div className='flex gap-1 justify-start flex-wrap'>
                          {
                            repo.topics &&
                            repo.topics?.map((topic, index) =>
                              <span
                                key={`${topic}-${index}`}
                                className={`text-[10px] font-sans rounded p-1 font-bold`}
                                style={
                                  {
                                    color: `${topicFontColors[topic as keyof typeof topicsColors]}`,
                                    backgroundColor: `${topicsColors[topic as keyof typeof topicsColors]}`
                                  }
                                }
                              >
                                {topic}
                              </span>)}
                        </div>
                      </footer>
                    </div>
                  </a>
                )
              })
            }


          </div>
        </div >
      </section >

      <ContactForm />

      <footer className='p-5 bg-transparent absolute -translate-y-[100%]'>
        <a href="https://github.com/xinefsiamed/portifolio" className='font-sans text-center text-white'>
          Designed & Built by Leonardo Augusto
        </a>
      </footer>
    </div >
  )
}