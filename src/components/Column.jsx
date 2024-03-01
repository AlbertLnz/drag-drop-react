import { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";
import { useCardStore } from "../store/store"; // Zustand

const Column = ({ title, headingColor, column, cards, setCards }) => {
  const [active, setActive] = useState(false);
  const filteredCards = cards.filter((card) => card.column === column)
  const assignId = useCardStore((state) => state.assignId);

  const handleDragStart = (card) => {
    // e.dataTransfer.setData("cardId", card.id) // <-- NOT WORKING!
    assignId(card.id); // <---------------------------- USING ZUSTAND!    
  }

  // Colorize the column onDragOver:
  const handleDragOver = (e) => {
    e.preventDefault()
    setActive(true)
  }

  // Decolorize the column onDragLeave:
  const handleDragLeave = () => {
    setActive(false)
  }

  // Finalize colorize when drag is completed (onDrop):
  const handleDragEnd = () => {
    setActive(false)
  }

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
      </div>
      <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDragEnd} className={`h-full w-full transition-colors ${!active ? 'bg-neutral-800/0' : 'bg-neutral-800/50'}`}>
        {filteredCards.map((card) => {
          return(
            <Card key={card.id} {...card} handleDragStart={handleDragStart}/>
          )
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  )
}

export default Column
