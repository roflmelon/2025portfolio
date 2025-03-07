import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


type Props = {setSelectedPage: (value: SelectedPage) => void}

const MyPortfolio = ({setSelectedPage}: Props) => {
  return (
    <section id="myportfolio" className="w-full bg-dark-secondary h-lvh py-40">
      <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.MYPORTFOLIO)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-mono mb-2 relative">
              0.3{" "}
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 inline-block text-transparent bg-clip-text relative z-10">
              My Portfolio
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
              Projects
          </motion.h2>
        </motion.div>
        <div className="flex justify-center items-center">
          <h2 className="text-5xl mt-32">Coming Soon</h2>
        </div>
      </motion.div>
    </section>
  )
}

export default MyPortfolio