import { useState } from "react";
import Logo from "@/assets/images/Logo.png"; // Replace with the actual path to your logo file
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween:string = "flex justify-between items-center";
  const isAboveMediumScreen:boolean = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "bg-transparent drop-shadow" : "bg-dark-900";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* logo left side of navbar */}
            <img alt="logo" src={Logo} />
            {/* menu right side of navbar */}
            {/* desktop screen */}
            {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="My Expertise"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="My Portfolio"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Me"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Sign in
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
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="flex flex-col fixed right-0 bottom-0 z-40 h-full w-[300px] bg-dark-300 drop-shadow-x justify-between">
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
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="My Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Me"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          {/* sign in */}
          <div className="ml-[33%] pb-12">
            <ActionButton setSelectedPage={setSelectedPage}>
            Sign in
            </ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
