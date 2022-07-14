import requests from "../util/requests"

const Nav = () => {
  return (
    <nav>
        <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap scrollbar-hide">
            {Object.entries(requests).map(([key, {title}]) => 
            (
              <h2 key={key} className="transition duration-100 transform cursor-pointer last:pr-24 hover:text-white hover:scale-125 active:text-red-500">{title}</h2>
            )
            )}
        </div>
    </nav>
  )
}

export default Nav