import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Inicial",
}

export default function MainPage(){
  return(
      <nav>
        <header className="px-4 py-5 flex items-center">
          <div className="flex align-text-top">
                <a 
                  className="font-sans font-semibold absolute inset-y-4 right-48 h-8 w-19"  
                  href="https://www.linkedin.com/in/joao-ignacio-castro-franco-634873232/" 
                  target="_blank"
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                      alt="LinkedinLogo"
                      width={60}
                      height={60}
                      />
                </a>              
          </div>
        </header>
          <div className="flex items-center justify-center h-[38rem]">
            <h1 className="font-sans w-96">Olá, me chamo João Ignacio Castro Franco, estou na última fase do curso de Análise e Desenvolvimento de Sistemas. 
            Procuro uma oportunidade na área de desenvolvimento, para mostrar meu aprendizado até o momento, fique a vontade neste site!
            Esta página foi desenvolvido em NextJS no front-end.
              <div className="font-sans flex items-center justify-center p-1 space-x-5">
                <Link 
                  className="border-2 rounded-md hover:transition-all hover:bg-red-950" 
                  href="/skills"
                  > 
                    Clique aqui para minhas skills
                  </Link> 
                <Link 
                  className="border-2 rounded-md hover:transition-all hover:bg-green-950"   
                  href="/projects"  
                  > 
                    Ou aqui para meus projetos pessoais
                  </Link>
              </div>
            </h1>
          </div>
      </nav>
  )
}