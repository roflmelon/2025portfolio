import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage:SelectedPage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === page ? "text-red-600" : "text-dark-400"} transition duration-500 hover:text-light-primary`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;

// <p>My Expertise</p>
// <p>About</p>
// <p>My Portfolio</p>
// <p>Contact Me</p>
// above are the pages for the anchor links
