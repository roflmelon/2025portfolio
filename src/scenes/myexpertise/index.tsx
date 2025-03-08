import { SelectedPage, SkillCardType } from "@/shared/types";
import { motion } from "framer-motion";
import SkillCards from "./SkillCards";
import CardContent from "./CardContent";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
}

const MyExpertise = ({selectedPage, setSelectedPage}: Props) => {
  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animations of child elements by 0.3 seconds
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <section id="myexpertise" className="flex justify-center items-center w-lvw bg-dark-secondary min-h-lvh overflow-hidden">
      <motion.div className="flex flex-col justify-center items-center mx-auto w-5/6 py-32" 
            viewport={{ once: true, amount: 0.1 }}onViewportEnter={()=> {setSelectedPage(SelectedPage.MYEXPERTISE)
        console.log(selectedPage)
      }}>
        {/* header title */}
        <div className="w-11/12 mb-16 relative">
          <p className="font-mono mb-2 relative">
            0.1{" "}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 inline-block text-transparent bg-clip-text z-10">
              My Expertise
            </span>
          </p>
          <hr className="absolute left-40 top-2.5 w-lvw h-0.5 bg-gray-200 border-0 rounded-sm" />
          <motion.h2
            className="font-semibold text-5xl"
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
            My Technical Skills
          </motion.h2>
        </div>
        {/* list of cards */}
        <motion.div
          className="flex justify-center flex-wrap w-full gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          variants={containerVariants}
        >
          {/* card */}
          {CardContent.map((content: SkillCardType)=>(
            <motion.div key={content.title + content.description} variants={childVariants}>
            <SkillCards 
                icon={content.icon}
                title={content.title}
                description={content.description}
            />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MyExpertise;