import { useState } from "react";
import { ArrowLeft } from "../icons/Icons";

export function AsideMenu () {
  const [open, setOpen] = useState(false)

  return (
    <aside className="h-screen bg-[#f7fafc] w-40 relative">
      <div className="absolute left-36 top-4 bg-[#CDA716] rounded-3xl flex items-center justify-center px-1 py-1">
        <ArrowLeft />
      </div>
      <nav className="flex flex-col items-center justify-center h-full">
        
      </nav>
    </aside>
  )
}