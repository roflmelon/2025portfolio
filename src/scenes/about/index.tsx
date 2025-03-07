import { motion } from "framer-motion";
import Selfie from "@/assets/images/selfie.jpg"


const AboutMePage = () => {
  return (
    <section id="about" className="flex justify-center items-center w-lvw bg-dark-primary min-h-lvh overflow-hidden">
        <div className="flex flex-col justify-center items-center mx-auto w-5/6 py-32">
            {/* header title */}
            <div className="w-11/12 mb-16">
                <p className="font-mono mb-2 relative">
                    0.2{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 inline-block text-transparent bg-clip-text relative z-10">
                    About Me
                    </span>
                    <hr className="absolute left-40 top-2.5 w-lvw h-0.5 bg-gray-200 border-0 rounded-sm" />
                </p>
                <motion.h2
                    className="font-semibold text-5xl mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                    },
                    }}
                >
                    Who I am
                </motion.h2>
                <div className="flex justify-center items-center flex-wrap gap-16 pl-10">
                    <div className="relative z-10 border-l-[3px] border-gray-600 max-w-4xl">
                        {/* content */}
                        <div className="font-mono text-md relative before:content-['<h2>'] before:absolute before:-top-5 before:-left-11 before:font-mono after:content-['<h2>'] after:absolute after:-bottom-5 after:-left-11 after:font-mono">
                            <p className="whitespace-pre-line text-base px-[1.5rem] font-montserrat">
                                My love for web development started when I realized I could built my own videos games from scratch. From there, I enrolled into Centennial College for software before switching over to the University of Toronto for Coding. I strive to build websites that are not only <span className="bg-gradient-to-r from-textColor-gradStart1 via-textColor-gradMid1 to-textColor-gradEnd1 inline-block text-transparent bg-clip-text">visually appealing</span>, but <span className="bg-gradient-to-r from-textColor-gradStart1 via-textColor-gradMid1 to-textColor-gradEnd1 inline-block text-transparent bg-clip-text">functional and user-friendly.</span>
                                <br/>
                                <br/>
                                Today, I'm a freelance web developer over at <span className="bg-gradient-to-r from-textColor-gradStart1 via-textColor-gradMid1 to-textColor-gradEnd1 inline-block text-transparent bg-clip-text">FIVERR</span>, building websites for small businesses.
                                <br/>
                                <br/>
                                When I'm not at my computer coding, you can find me hiking, gaming, or trying new foods! I'm never sitting still, unless i'm coding!
                            </p>
                            
                        </div>
                        
                        
                    </div>
                    <div className="relative before:content-[''] before:absolute before:-top-5 before:left-52 before:size-28 before:bg-[url('@/assets/images/arrow.png')] before:bg-contain before:bg-no-repeat after:content-[''] after:absolute after:bottom-0 after:-left-8 after:size-28 after:bg-[url('@/assets/images/sparkles.png')] after:bg-contain after:bg-no-repeat">
                        <img src={Selfie} alt="Selfie" className="float-right size-64 rounded-full object-cover" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMePage