import HText from "@/shared/HText";
import { AboutMe, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion, stagger } from "framer-motion";
import AboutMeCard from "./AboutMeCard";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/images/BenefitsPageGraphic.png"

type Props = {setSelectedPage: (value: SelectedPage) => void}
const facts: Array<AboutMe> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title: "Fact 1 about me",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti veniam. Neque odit tempora magnam distinctio nesciunt qui, facere, quas atque impedit consequuntur molestias? Inventore maiores soluta"
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title: "Fact 2 about me",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti veniam. Neque odit tempora magnam distinctio nesciunt qui, facere, quas atque impedit consequuntur molestias? Inventore maiores soluta"
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title: "Fact 3 about me",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti veniam. Neque odit tempora magnam distinctio nesciunt qui, facere, quas atque impedit consequuntur molestias? Inventore maiores soluta"
    },
]

const container = {
    hidden:{},
    visible:{
        transition:{
            staggerChildren: 0.2
        }
    }
}


const AboutMePage = ({setSelectedPage}: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
            onViewportEnter={()=> setSelectedPage(SelectedPage.ABOUT)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>About Me</HText>
                <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, corrupti veniam. Neque odit tempora magnam distinctio nesciunt qui, facere, quas atque impedit consequuntur molestias? Inventore maiores soluta iure facere ipsam.</p>
            </motion.div>

            {/* Cards */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.2 }}
                variants={container}
                className="mt-5 items-center justify-between gap-8 md:flex"
            >
                {facts.map((fact: AboutMe)=> (
                    <AboutMeCard
                        key={fact.title}
                        icon={fact.icon}
                        title={fact.title}
                        description={fact.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphic and description*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md-[600px]:flex">
                {/* Graphic */}
                <img
                    className="mx-auto"
                    alt="about-me-graphic"
                    src={BenefitPageGraphic} 
                />
                {/* Description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        {/* NEED TO FIX THE Z INDEX HERE */}
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once:true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>Check My {""}
                                    <span className="text-dark-500">Stuff</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* descipt */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas amet perferendis dignissimos in molestiae a alias nesciunt atque dolorum, blanditiis perspiciatis, cupiditate corporis modi error numquam quidem ea necessitatibus eius.
                        </p>
                        <p className="mb-5">
                            Voluptas amet perferendis dignissimos in molestiae a alias nesciunt atque dolorum, blanditiis perspiciatis, cupiditate corporis modi error numquam quidem ea necessitatibus eius. Rerum molestias recusandae perspiciatis vel eos nemo suscipit ipsa, veritatis expedita assumenda! Possimus a delectus dolor? Nobis officiis delectus ex quibusdam iste.
                        </p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-10 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>Learn More</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default AboutMePage