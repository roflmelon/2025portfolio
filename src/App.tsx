import { useEffect, useState } from "react";
import NavBar from "@/scenes/navbar"; // auto import if the file is named "index"
import Hero from "@/scenes/hero"; // auto import if the file is named "index"
import About from "@/scenes/about"; // auto import if the file is named "index"
import { SelectedPage } from "@/shared/types";
import MyPortfolio from "./scenes/myportfolio";
import ContactMe from "./scenes/contactme";
import Footer from "./scenes/footer";
import MyExpertise from "./scenes/myexpertise";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HERO);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HERO);
      }
      if(window.scrollY!== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-[20] overflow-hidden">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}/>
      <MyExpertise setSelectedPage={setSelectedPage} 
        selectedPage={selectedPage}/>
      <About setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}/>
      <MyPortfolio setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}/>
      <ContactMe setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
