interface ProjectCardProps {
    title: string,
    src: string,
    about: string
}

export default function ProjectCard({title, src, about} : ProjectCardProps) {
  return (
    
      <div className="bg-[#2E073F] border-2 shadow-[0_3px_27px_-8px_rgba(0,0,0,0.1)] hover:scale-110 transition delay-150 shadow-[#AD49E1] border-[#AD49E1] p-6 rounded-lg flex flex-col z-10">
        <h1 className="text-[#E4B1F0] text-2xl font-semibold text-center mb-3">{title}</h1>
        <img src={src} alt="teste project" className="rounded-md mb-3 md:w-[360px] md:h-[200px]"/>
        <p className="text-white text-base text-pretty">
          {about}
        </p>
      </div>
    
  );
}
