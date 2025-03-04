type Props = {
    project:string
    description?:string
    image:string
}

const ProjectCard = ({project, description = "default description", image}: Props) => {

const overlayStyles = `p-5 absolute z-30 flex h-[340px] w-[450px] flex-col items-center justify-center
                        whitespace-normal bg-dark-500 text-center text-white opacity-0 transition duration-500
                        hover:opacity-90`


  return (
    <li className="relative mx-5 inline-block h-[340px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{project}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img alt={image} src={image}/>
    </li>
  )
}

export default ProjectCard