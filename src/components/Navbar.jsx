import React from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="border-none pr-4 bg-transparent text-black">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden">{<MenuIcon className="w-5" />}</div>
      </div>
      <ul className="absolute bg-zinc-200 w-full px-8"></ul>
    </div>
  )
}

export default Navbar
