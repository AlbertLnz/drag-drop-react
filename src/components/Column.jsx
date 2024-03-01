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
    HiglightIndicator(e)
    setActive(true)
  }

  // Decolorize the column onDragLeave:
  const handleDragLeave = () => {
    clearHiglights()
    setActive(false)
  }

  // Finalize colorize when drag is completed (onDrop):
  const handleDragEnd = () => {
    clearHiglights()
    setActive(false)
  }

  // Higlight the indicator
  const HiglightIndicator = (e) => {
    const indicators = getIndicators()
    clearHiglights(indicators)
    const el = getNearestIndicator(e, indicators)
    el.element.style.opacity = "1"
  }
  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  }
  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if(offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }

      }, {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1]
      }
    )
    return el
  }
  const clearHiglights = (els) => {
    const indicators = els || getIndicators()
    indicators.forEach((i) => {
      i.style.opacity = "0"
    })
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
