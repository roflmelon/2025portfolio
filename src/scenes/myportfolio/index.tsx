import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


type Props = {setSelectedPage: (value: SelectedPage) => void, selectedPage:SelectedPage}

const MyPortfolio = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <section id="myportfolio" className="flex justify-center items-center w-lvw bg-dark-secondary min-h-lvh overflow-hidden">
      <motion.div
        onViewportEnter={()=> {setSelectedPage(SelectedPage.MYPORTFOLIO);
          console.log(selectedPage)
        }}
        className="flex flex-col justify-center items-center mx-auto w-5/6 py-32"
      >
        {/* Header */}
        <motion.div
          className="w-11/12 mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-mono mb-2">
              0.3{" "}
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 inline-block text-transparent bg-clip-text z-10">
              My Portfolio
              </span> 
          </p>
          <hr className="absolute left-40 top-2.5 w-lvw h-0.5 bg-gray-200 border-0 rounded-sm" />
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

        {/* list of projects */}
        <div className="flex justify-center items-center">
          <h2 className="text-5xl mb-32">Coming Soon</h2>
        </div>
      </motion.div>
    </section>
  )
}

export default MyPortfolio