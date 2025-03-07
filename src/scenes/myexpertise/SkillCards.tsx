import { JSX } from "react"


type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
};

const SkillCards = ({icon, title, description}: Props) => {

    return (
    //container and the border
    <div className='group relative bg-dark-500 transition duration-500 hover:bg-transparent rounded-3xl max-w-[510px] p-[2.5px]'>
        {/* gradient border */}
        <div className='rounded-3xl absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500'></div>
        <div className="relative flex justify-center items-center p-8 bg-dark-secondary rounded-[1.4rem] z-10">
            {/* glassy layer */}
            <div className="absolute w-full h-full rounded-[1.4rem] bg-gradient-to-br from-slate-100 via-slate-600 to-slate-950  opacity-0 group-hover:opacity-35 transition duration-500"></div>
            {/* inner div to set display:block container */}
            <div className="min-h-[338px]">
                <div className="relative z-10 flex gap-6 my-8">
                    {/* Icon */}
                    {/* Icon Container with Background Image */}
                    <div className="mt-3 min-h-12 max-w-12">
                        {icon}
                    </div>
                    
                    {/* title */}
                    <div className="flex justify-center items-center ml-1 max-w-52">
                        <span className="relative text-2xl font-semibold text-white py-2 group">
                            {title}
                            {/* Gradient Background Highlight */}
                            <span className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 scale-x-0 transition-transform duration-500 group-hover:scale-x-150 origin-left rounded-r-3xl" />
                        </span>
                    </div>
                </div>
                {/* title and content */}
                <div className="relative z-10 border-l-[3px] border-gray-600 ml-[2.8rem]">
                    {/* content */}
                    <div className="font-mono text-sm relative before:content-['<h3>'] before:absolute before:-top-5 before:-left-11 before:font-mono after:content-['<h3>'] after:absolute after:-bottom-5 after:-left-11 after:font-mono">
                        <p className="whitespace-pre-line text-base px-[1.5rem] font-dmsans mb-12">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SkillCards;