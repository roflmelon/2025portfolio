import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
}
//make this button download cv
const ActionButton = ({children}: Props) => {
  return (
    <AnchorLink
        className="relative inline-block text-sm font-medium text-white group"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-300 rounded-md blur-sm"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-300 rounded-md"></span>
      <span className="relative block px-8 py-2 bg-dark-primary border border-transparent rounded-md group-hover:bg-opacity-0 transition duration-500 cursor-pointer">
        {children}
      </span>
    </AnchorLink>
  )
}

export default ActionButton