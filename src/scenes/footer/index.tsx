import Logo from "@/assets/images/LogoDarkTheme.png"

const Footer = () => {
  return (
    <footer className="bg-dark-500 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} className="scale-[0.25]"/>
                <p className="my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, officia laboriosam minima, dolor cupiditate eius dolorem modi deserunt maxime autem sit. Et, impedit dolor ab tempora tempore cumque laboriosam illum?
                </p>
                <p>
                    © 2025 Harry Zhou. All rights reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">dolor perspiciatis exercitationem dolore voluptates, a omnis ratione minima! Nemo, voluptates?</p>
                <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Provident corrupti esse ea expedita laudantium!</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Me</h4>
                <p className="my-5">Dolorum voluptatem doloremque omnis.</p>
                <p>(416)-123-1234</p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer