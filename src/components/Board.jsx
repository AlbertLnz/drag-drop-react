import { useEffect, useState } from "react";
import Column from "./Column"
import { DEFAULT_CARDS } from "../cards";
import Trash from './Trash'

const Board = () => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards, hasChecked])
  
  useEffect(() => {
    const cardData = localStorage.getItem('cards');

    if (!cardData) {
      localStorage.setItem('cards', JSON.stringify(DEFAULT_CARDS));
      setCards(DEFAULT_CARDS);
    } else {
      setCards(JSON.parse(cardData));
    }

    setHasChecked(true);
  }, [])
  

  return (
    <div className="flex h-full w-full gap-x-4 overflow-scroll p-12 justify-center pt-20">
      <Column 
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column 
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column 
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column 
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <Trash setCards={setCards}/>
    </div>
  )
}

export default Board
