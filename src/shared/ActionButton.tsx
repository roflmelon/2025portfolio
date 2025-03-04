import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-dark-primary px-10 py-2 hover:bg-dark-600 transition duration-500 hover:text-light-primary"
        onClick={() => setSelectedPage(SelectedPage.CONTACTME)}
        href={`#${SelectedPage.CONTACTME}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton