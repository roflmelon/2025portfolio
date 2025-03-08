import Logo from "@/assets/svg/Logo"
import GitHub from "@/assets/svg/socials/github"
import Instagram from "@/assets/svg/socials/instagram"
import Linkedin from "@/assets/svg/socials/linkedin"
import YouTube from "@/assets/svg/socials/youtube"


const Footer = () => {
  return (
    <footer className="bg-dark-primary py-16">
        <div className=" w-5/6 mx-auto flex justify-center">
            <div className="w-11/12 flex justify-center gap-16 flex-wrap">
                {/* left side/top Disclaimer */}
                <div className="mt-16 md:mt-0 w-[700px]">
                    {/* svg logo */}
                    <Logo />
                    <p className="my-5 text-gray-500">
                        Designed by Anita Thang using Figma and coded in Visual Studio. Built with Vite TypeScript React with Tailwind CSS. Deployed on Cloudflare Pages.
                    </p>
                    <p className="my-5 text-gray-500">
                        © 2025 Harry Zhou. All rights reserved.
                    </p>
                </div>
                
                {/* right side/bottom Socials*/}
                <div className="mt-16 md:mt-0 w-[700px]">
                    <h4 className="font-bold text-xl mb-[42px] text-gray-500">Links</h4>
                    <div className="flex gap-8">
                        {/* svg social links */}
                        <a href="https://github.com/roflmelon">
                        <GitHub/></a>
                        <a href="https://www.instagram.com/">
                        <Instagram/></a>
                        <a href="https://www.linkedin.com/in/harryzhou95/">
                        <Linkedin/></a>
                        <a href="https://www.youtube.com/">
                        <YouTube/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer