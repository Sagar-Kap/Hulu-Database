import { Router, useRouter } from "next/router"
import requests from "../util/requests"

const Nav = () => {
  const router = useRouter();


  return (
    <nav className="relative">
        <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 sm:space-x-20 whitespace-nowrap scrollbar-hide">
            {Object.entries(requests).map(([key, {title}]) => 
            (
              <h2 
              key={key} 
              onClick={() => router.push(`/?genre=${key}`)}
              className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
            )
            )}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  )
}

export default Nav;