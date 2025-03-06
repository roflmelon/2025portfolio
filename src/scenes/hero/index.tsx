import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/images/HomePageText.png"; 
import HomePageGraphic from "@/assets/images/HomePageGraphic.png"; 
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {setSelectedPage: (value: SelectedPage) => void}

const Hero = ({setSelectedPage}: Props) => {


  return (
    <section id="hero" className="gap-16 bg-dark-primary py-10 md:h-lvh md:pb-0">
        {/* Image and main header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-dvh"
            onViewportEnter={()=> setSelectedPage(SelectedPage.HERO)}
        >
            {/* Main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div 
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className="mt-8 text-sm md:text-start">Hi, This is Harry</p>
                </motion.div>
                {/* Actions */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton>Contact Me</ActionButton>
                    <AnchorLink 
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.CONTACTME)}
                        href={`#${SelectedPage.CONTACTME}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-page-graphic" src={HomePageGraphic} />
            </div>
        </motion.div>
    </section>
  )
}

export default Hero