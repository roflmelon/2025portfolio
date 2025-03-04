import HText from "@/shared/HText";
import { PortfolioType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/images/image1.png"
import image2 from "@/assets/images/image2.png"
import image3 from "@/assets/images/image3.png"
import image4 from "@/assets/images/image4.png"
import image5 from "@/assets/images/image5.png"
import image6 from "@/assets/images/image6.png"
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

//change this eventually to a api call
const portfolio: Array<PortfolioType> = [
  {
    project: "Project 1",
    image: image1,
  },
  {
    project: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique minima dolore totam fugit! Laudantium ipsum sequi mollitia eaque ipsa eligendi quaerat doloremque impedit dolore voluptas? In quod reiciendis impedit?",
    image: image2,
  },
  {
    project: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique minima dolore totam fugit! Laudantium ipsum sequi mollitia eaque ipsa eligendi quaerat doloremque impedit dolore voluptas? In quod reiciendis impedit?",
    image: image3,
  },
  {
    project: "Project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique minima dolore totam fugit! Laudantium ipsum sequi mollitia eaque ipsa eligendi quaerat doloremque impedit dolore voluptas? In quod reiciendis impedit?",
    image: image4,
  },
  {
    project: "Project 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique minima dolore totam fugit! Laudantium ipsum sequi mollitia eaque ipsa eligendi quaerat doloremque impedit dolore voluptas? In quod reiciendis impedit?",
    image: image5,
  },
  {
    project: "Project 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique minima dolore totam fugit! Laudantium ipsum sequi mollitia eaque ipsa eligendi quaerat doloremque impedit dolore voluptas? In quod reiciendis impedit?",
    image: image6,
  }
]


type Props = {setSelectedPage: (value: SelectedPage) => void}

const MyPortfolio = ({setSelectedPage}: Props) => {
  return (
    <section id="myportfolio" className="w-full bg-dark-700 py-40">
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
          <div className="md:w-3/5">
            <HText>My Portfolio</HText>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sequi id pariatur aliquid, corrupti dicta facilis quae officia, omnis deserunt ab eveniet vero odio suscipit explicabo. Cupiditate laudantium natus minus?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {portfolio.map((item:PortfolioType, index) => (
              <ProjectCard
                key={`${item.project}-${index}`}
                project={item.project}
                description={item.description}
                image={item.image}
              />
            ))}

          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default MyPortfolio