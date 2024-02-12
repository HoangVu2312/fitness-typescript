import Navbar from "@/scenes/navbar/index.tsx"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home/index.tsx";
import Benefits from "@/scenes/benefits/index.tsx";
import Lessions from "@/scenes/lessions/index.tsx";
import Contact from "@/scenes/contact/index.tsx";
import Footer from "@/scenes/footer/index.tsx";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home  // SelectedPage = data types  >< selectedPage = state of this component
);

const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll", handleScroll); 
  return () => window.removeEventListener("scroll", handleScroll);  // handle when component unmount
}, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      </div>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Lessions setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer />
    </>
  )
}

export default App
