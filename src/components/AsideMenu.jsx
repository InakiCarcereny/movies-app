import { useState } from "react";
import { ArrowLeft, 
  ArrowRight, 
  Home, 
  User, 
  Settings } from "../icons/Icons";
import { List } from "./List";

const info = [
  {
    id: 1,
    tittle: 'Home',
    icon: Home,
  },
  {
    id: 2,
    tittle: 'Profile',
    icon: User
  },
  {
    id: 3,
    tittle: 'Settings',
    icon: Settings
  }
]

export function AsideMenu () {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`flex flex-col h-screen bg-gray-100 my-2 mx-2 rounded-xl duration-200 
    ${open ? 'w-20' : 'w-60'}`}>
      <div className="flex items-center justify-between px-2 py-2 gap-4">
        <h1 className={`text-2xl font-semibold ${open && 'hidden'}`}>MovieApp</h1>
        <button 
        className=""
        onClick={() => setOpen(!open)}>
          {open ? <ArrowRight /> : <ArrowLeft />}
        </button>
      </div>
      <nav className="flex flex-col justify-center px-2 mt-6">
        <ul>
          {
            info.map(({ id, tittle, icon }) => (
              <List tittle={tittle} 
              icon={icon}
              key={id} 
              open={open}/>
            )
          )}
        </ul>
      </nav>
    </aside>
  )
}