import { Badge } from "@/components/ui/badge";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AtSign, Map, Github, Download } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import RightsText from "./components/RightsText";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#010A20] to-[#2E073F] overflow-x-hidden">
      <header className="mb-12">
        <nav className="p-4 flex items-center justify-between space-x-2 text-white">
          <h1 className="text-lg text-left">
            <span className=" text-[#AD49E1]">{"<h1> "}</span>
            Pedro
            <span className=" text-[#AD49E1]">{"<h1/> "}</span>
          </h1>
          <div className="flex space-x-4">
            <a href="#card" className="relative group">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-1 rounded-full bg-gradient-to-r from-[#7A1CAC] to-[#EBD3F8] transition-all group-hover:w-full"></span>
            </a>
            <a href="#about-me" className="relative group">
              Sobre mim
              <span className="absolute bottom-0 left-0 w-0 h-1 rounded-full bg-gradient-to-r from-[#7A1CAC] to-[#EBD3F8] transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group">
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-1 rounded-full bg-gradient-to-r from-[#7A1CAC] to-[#EBD3F8] transition-all group-hover:w-full"></span>
            </a>
          </div>
        </nav>
      </header>
      <main className="relative flex flex-col mb-12">
        <section
          className=" h-full w-2/3 md:w-80 mb-12 mx-auto border-2 rounded-md border-[#AD49E1] animate-pulseBorder overflow-hidden"
          id="card"
        >
          <img
            src="/eu.jpg"
            alt="eu"
            className="rounded-full mx-auto mt-4"
            width={128}
          />
          <div className="text-white text-center">
            <h1 className="text-sm">Pedro Figueiredo</h1>
            <h3 className="text-xs">Desenvolvedor Fullstack</h3>
          </div>
          <div className="flex justify-center flex-wrap m-3 gap-2">
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              HTML
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              CSS
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              JS
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              REACT
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              NEXT
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              SASS
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              TAILWIND
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              BOOTSTRAP
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              SQL SERVER
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              MYSQL
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              POSTGRESQL
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              C#
            </Badge>
            <Badge className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white">
              .NET
            </Badge>
          </div>
          <div className="text-white text-xs text-left mt-3 ml-12">
            <span className="flex items-center gap-1">
              <AtSign className="w-3" /> pedrofigsesteves@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Map className="w-3" />
              Rio de Janeiro
            </span>
            <a
              href="https://github.com/Myourkiu"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              <Github className="w-3" />
              Myourkiu
            </a>
            <a
              href="https://www.linkedin.com/in/myourkiu/"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              <LinkedInLogoIcon className="w-3" />
              Pedro Figueiredo
            </a>
          </div>
          <a
            href="/curriculo.pdf"
            className="btn w-40 py-2 flex items-center justify-center gap-2 mx-auto rounded-full text-white text-sm my-6 bg-gradient-to-r from-[#7A1CAC] to-[#AD49E1]"
            download
          >
            Baixar Currículo
            <Download width={16} />
          </a>
        </section>

        <h1
          className="text-transparent text-3xl font-bold text-center bg-clip-text mb-6"
          style={{
            backgroundImage: "linear-gradient(to right, #7A1CAC, #EBD3F8)",
          }}
        >
          Sobre mim
        </h1>

        <section
          className="h-full w-2/3  bg-[#2E073F] p-6 rounded-xl mx-auto text-white mb-12"
          id="about-me"
        >
          <div className="mb-3 text-2xl">
            <div className="text-[#E4B1F0]">{"<h1>"}</div>
            <p className="ml-12">
              Meu nome é
              <br />
              <span className="text-[#AD49E1]">Pedro Figueiredo,</span>
              <br />
              <span>sou um Desenvolvedor Fullstack</span>
            </p>
            <div className="text-[#E4B1F0]">{"</h1>"}</div>
          </div>
          <div className="text-xl">
            <div className="text-[#E4B1F0] text-2xl">{"<p>"}</div>
            <p className="ml-12 text-pretty">
              Desenvolvo aplicações de forma eficiente, com foco em código limpo
              e escalável. Caso precise, suas buscas acabaram.
            </p>
            <div className="text-[#E4B1F0] text-2xl">{"</p>"}</div>
          </div>
          <div className="text-xl">
            <div className="text-[#E4B1F0] text-2xl">{"<p>"}</div>
            <p className="ml-12 text-pretty">
              Com foco no fullstack, busco aperfeiçoar minhas habilidades em
              C#/.Net para o Back-End e HTML, CSS, JavaScript, React e Next para
              o Front-End.
            </p>
            <div className="text-[#E4B1F0] text-2xl">{"</p>"}</div>
          </div>
        </section>

        <h1
          className="text-transparent text-3xl font-bold text-center bg-clip-text mb-6"
          style={{
            backgroundImage: "linear-gradient(to right, #7A1CAC, #EBD3F8)",
          }}
        >
          Meus Projetos
        </h1>

        <section
          className="h-full w-2/3 rounded-xl grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-12 mx-auto text-white mb-12"
          id="projects"
        >
          <ProjectCard
            title="Bot WhatsApp"
            about="Uma automação desenvolvida em C# com várias funcionalidades, como criar figurinhas, spammar mensagens, enviar fotos, etc. Apenas precisa que seu WhatsApp Web tenha sido conectado ao menos uma vez no Chrome e está pronto para uso, basta apenas indicar o nome do contato e a função desejada."
            src="/bot-wpp.png"
          />

          <ProjectCard
            title="BulkyBook"
            about="Uma aplicação desenvolvida em .Net, onde simula um E-Commerce de livros. Utiliza o Identity, Unit of Work e Repository Pattern em sua estrutura. A aplicação possui sistemas de login, páginas de cliente e administrador e diversas validações para garantir uma experiência imersiva."
            src="/bulky.png"
          />

          <ProjectCard
            title="Costs"
            about="Aplicação desenvolvida em React com o intuito de simular um site de gerenciamento de projetos. Utiliza do JsonServer como banco de dados. Nesta aplicação é possível criar, editar, excluir e ver projetos, além de validações, como por exemplo, se o gasto vai ser maior que o orçamento do projeto."
            src="/costs.png"
          />

          <ProjectCard
            title="Login CRUD"
            about="Um CRUD desenvolvido em React para simular um login. Utiliza do JsonServer para gerenciar os dados e BCrypt para a criptografia da senha do usuário. Nesta aplicação, é possível criar um usuário, logar com ele e ver suas informações pessoais, além da possibilidade de editar e deletar o usuário."
            src="/login-crud.png"
          />
        </section>
      </main>
      <footer className="flex justify-between items-center w-full border-t border-[#7A1CAC] p-4">
        <h1 className="text-lg text-white text-center">
          <span className=" text-[#AD49E1]">{"<h1> "}</span>
          Pedro
          <span className=" text-[#AD49E1]">{"<h1/> "}</span>
        </h1>

        <RightsText />
      </footer>
    </div>
  );
}
