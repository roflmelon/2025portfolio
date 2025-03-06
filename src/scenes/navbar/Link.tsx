import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  indexText?: string;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled?:boolean
  setIsMenuToggled?: (value: boolean) => void;
};

function Link({ indexText, page, selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled }: Props) {
  const lowerCasePage:SelectedPage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (setIsMenuToggled) {
          setIsMenuToggled(!isMenuToggled);
        }
      }}
      className={`${selectedPage === lowerCasePage ? "text-white" : "text-dark-500"} transition duration-500 hover:text-white`}
    >
      {indexText !== undefined ? (
        <span className="bg-gradient-to-r from-indigo-600 via-violet-400 to-indigo-200 inline-block text-transparent bg-clip-text transition duration-500 text-white">
          {indexText + " "}
        </span>
      ) : null}
      {" " + page}
    </AnchorLink>
  );
}

export default Link;

// <p>My Expertise</p>
// <p>About</p>
// <p>My Portfolio</p>
// <p>Contact Me</p>
// above are the pages for the anchor links
