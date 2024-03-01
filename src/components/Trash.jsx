import { useState } from "react";
import fire from '../assets/fire.svg'
import trash from '../assets/trash.svg'
import { useCardStore } from "../store/store";

const Trash = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const cardIdStore = useCardStore((state) => state.cardId)

  const handleDragOver = (e) => {
    e.preventDefault()
    setActive(true)
  }

  const handleDragLeave = () => {
    setActive(false)
  }

  const handleDragEnd = () => {
    // const cardId = e.dataTransfer.getData("cardId") // USING dataTransfer (not work!)
    setCards((pv) => pv.filter((c) => c.id !== cardIdStore));
    setActive(false);
  }

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      className={
        `mt-12 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl
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

export default Trash
