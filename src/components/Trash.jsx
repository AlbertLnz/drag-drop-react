import { useState } from "react";
import fire from '../assets/fire.svg'
import trash from '../assets/trash.svg'

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  
  return (
    <div 
      className={
        `mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl
         ${active ? 'border-red-800 bg-red-800/20 text-red-500' : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'}
        `
      }>
      
      {active
        ? <img src={fire} className="animate-bounce" alt="" /> 
        : <img src={trash} alt="" />
      }

    </div>
  )
}

export default BurnBarrel
