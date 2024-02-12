import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode; // the children is the text Become a Member | 
  setSelectedPage: (value: SelectedPage) => void;
};

// setSelectedPage = function to navigate to the right section
const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white "
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
        {/* dinamic content inside the button */}
      {children}
    </AnchorLink>
  );
};

export default ActionButton;