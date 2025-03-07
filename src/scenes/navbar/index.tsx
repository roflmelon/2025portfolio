import { useState } from "react";
import Logo from "@/assets/images/LogoDarkTheme.png"; // Replace with the actual path to your logo file
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween:string = "flex justify-between items-center";
  const isAboveMediumScreen:boolean = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "transition duration-500 bg-transparent shadow-[0_-20px_50px_0px_rgba(255,255,255,0.1)]" : "transition duration-500 bg-dark-secondary";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-lvw py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* logo left side of navbar */}
              <img alt="logo" className="h-10 cursor-pointer" src={Logo} onClick={() => setSelectedPage(SelectedPage.HERO)}/>
            {/* menu right side of navbar */}
            {/* desktop screen */}
            {isAboveMediumScreen ? (<div className={`flex justify-end w-full`}>
              <div className={`${flexBetween} gap-8 text-sm mx-8`}>
                <Link
                  indexText="0.1"
                  page="My Expertise"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  indexText="0.2"
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  indexText="0.3"
                  page="My Portfolio"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  indexText="0.4"
                  page="Contact Me"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton>
                  Resume
                </ActionButton>
              </div>
            </div>):( //------------------mobile view----------------
              <button
                className="rounded-full bg-dark-700 p-2"
                onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="text-white h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Modal */}
      {/* AnimatePresence prevents react from removing the node from the DOM before the exit transition is fired */}
      <AnimatePresence>
      {!isAboveMediumScreen && isMenuToggled && (
          <motion.div 
            className="flex flex-col fixed right-0 bottom-0 z-40 h-full w-[300px] bg-dark-primary shadow-[20px_0px_50px_0px_rgba(255,255,255,0.1)] justify-between"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* close button */}
            <div className="flex justify-end p-12">
              <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-600"></XMarkIcon>
              </button>
            </div>
            {/* menu items */}
            <div className={`flex flex-col text-2xl gap-10 ml-[33%]`}>
              <Link
                page="My Expertise"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="My Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>
            {/* Resume */}
            <div className="ml-[33%] pb-12">
              <ActionButton>
              Resume
              </ActionButton>
            </div>
          </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
