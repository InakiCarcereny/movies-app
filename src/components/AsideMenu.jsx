import { useState } from "react";
import { Arrow1 } from "../icons/Arrow1"
import { Arrow2 } from "../icons/Arrow2"
import { HomeIcon } from "../icons/HomeIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { UserIcon } from "../icons/UserIcon";
import { List } from "./List";

const info = [
  {
    id: 1,
    tittle: 'Home',
    icon: HomeIcon,
  },
  {
    id: 2,
    tittle: 'Profile',
    icon: UserIcon
  },
  {
    id: 3,
    tittle: 'Settings',
    icon: SettingsIcon
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
          {open ? <Arrow2 /> : <Arrow1 />}
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