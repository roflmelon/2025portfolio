import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void, selectedPage:SelectedPage, isTopOfPage:boolean };

const Hero = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Stagger the animations of child elements by 0.3 seconds
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="hero" className="bg-dark-primary py-10 md:h-lvh md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-start md:h-dvh"
        onViewportEnter={() => {setSelectedPage(SelectedPage.HERO);
          console.log(selectedPage)
          if(isTopOfPage)
            setSelectedPage(SelectedPage.HERO)
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main header */}
        <div className="z-10 py-20 md:mt-0 md:basis-4/5">
          {/* Text */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={containerVariants}
          >
            <motion.p
              className="mt-8 text-md text-textColor-main font-mono md:text-start"
              variants={childVariants}
            >
              👋 Hey there!
            </motion.p>
            <motion.h1
              className="mt-2 pl-1 text-6xl font-semibold md:text-start"
              variants={childVariants}
            >
              I'm Harry and I like coding
              <br />
              <span className="text-textColor-main"> Beautiful websites</span>
            </motion.h1>
            <motion.p
              className="mt-3 pl-2 text-md md:text-start"
              variants={childVariants}
            >
              I'm a software developer specializing in improving <span className="bg-gradient-to-r from-textColor-gradStart1 via-textColor-gradMid1 to-textColor-gradEnd1 inline-block text-transparent bg-clip-text">user experience.</span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;