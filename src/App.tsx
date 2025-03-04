import { useEffect, useState } from "react";
import NavBar from "@/scenes/navbar"; // auto import if the file is named "index"
import Hero from "@/scenes/hero"; // auto import if the file is named "index"
import About from "@/scenes/about"; // auto import if the file is named "index"
import { SelectedPage } from "@/shared/types";
import MyPortfolio from "./scenes/myportfolio";
import ContactMe from "./scenes/contactme";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.MYEXPERTISE);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.MYEXPERTISE);
      }
      if(window.scrollY!== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark-600 z-[20]">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero 
        setSelectedPage={setSelectedPage}
      />
      <About 
        setSelectedPage={setSelectedPage}
      />
      <MyPortfolio
        setSelectedPage={setSelectedPage}
      />
      <ContactMe
        setSelectedPage={setSelectedPage}
      />
      <Footer/>
    </div>
  );
}

export default App;
