//tsrafce
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

// same as interface
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

    // define a common varian to use in many div
    const flexBetween = "flex items-center justify-between";

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);


    // this hook return a boolean to indicate if the screen is above the min-width or NOT
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
    <div
    className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      {/* inside part */}
        <div className={` ${flexBetween} mx-auto w-5/6`}>
          <div className={` ${flexBetween} mx-auto w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo}/>

            {/* right side */}
            {isAboveMediumScreens ?
            <div className={` ${flexBetween} w-full mx-3`}>

              <div className={` ${flexBetween} w-5/6 gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Lessions" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>

              <div className={` ${flexBetween} gap-8`}>
              <ActionButton setSelectedPage={setSelectedPage}>
                    Get Membership
              </ActionButton>
              </div>

            </div>
             : ( 
              <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
             )}
             </div>
        </div>
    </div>

          {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
    )}
    </nav>
  )
}

export default Navbar