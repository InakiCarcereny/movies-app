export function List ({ id, tittle, icon, open }) {

  return (
    <li
    key={id} 
    className={`flex items-center gap-4 hover:bg-blue-600 hover:text-blue-50 rounded-xl px-2 py-1 mb-4`}>
      {icon()}
      <span className={`font-semibold ${open && 'hidden' }`}>{tittle}</span>
    </li>
  )
}