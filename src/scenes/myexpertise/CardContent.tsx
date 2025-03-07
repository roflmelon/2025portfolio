import BackendSVG from "@/assets/svg/BackendSVG";
import ComputerSVG from "@/assets/svg/ComputerSVG";
import FrontendSVG from "@/assets/svg/FrontendSVG";
import PhotographySVG from "@/assets/svg/PhotographySVG";
import { SkillCardType } from "@/shared/types";


const CardContent: Array<SkillCardType> = [
  {
      icon: <FrontendSVG />,
      title: "Front-End Development",
      description: "Experiences with React and various libraries. Develop attractive and intuitive interfaces.\n\nSolid understanding of other frameworks such as JQuery and Handlebars"
  },
  {
      icon: <BackendSVG />,
      title: "Back-End Development",
      description: "Experienced with Express, MongoDB, mySQL, GraphQL. Knowledge in Websockets and its implementation and application.\n\nAble to use various ORM for SQL and no-SQL databases."
  },
  {
      icon: <ComputerSVG />,
      title: "Software Development",
      description: "Ability to develop intuitive Android applications using Android Studio. Well versed in Java, C# and Python.\n\nAble to use various programming language with high proficiency."
  },
  {
      icon: <PhotographySVG />,
      title: "Photo and Graphic Design",
      description: "Passionate outdoor photographer and designer, with expert proficiency in the Adobe Suite, crafting visually striking work that consistently exceeds expectations."
  },
]
export default CardContent