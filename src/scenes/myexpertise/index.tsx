import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import SponsorRedBull from "@/assets/images/SponsorRedBull.png";
import SponsorForbes from "@/assets/images/SponsorForbes.png"; 
import SponsorFortune from "@/assets/images/SponsorFortune.png"; 



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const MyExpertise = ({setSelectedPage}: Props) => {
    
    const isAboveMediumScreen:boolean = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="myexpertise" className="mx-auto">
        {/* Tech Stack */}
        {/* {isAboveMediumScreen && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="sponsor-redbull" src={SponsorRedBull} />
                        <img alt="sponsor-forbes" src={SponsorForbes} />
                        <img alt="sponsor-fortune" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )} */}
        My Expertise
    </section>
  )
}

export default MyExpertise