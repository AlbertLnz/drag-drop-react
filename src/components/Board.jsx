import { useEffect, useState } from "react";
import Column from "./Column"
import { DEFAULT_CARDS } from "../cards";
import Trash from './Trash'
import CleanedUp from "./CleanedUp";

const Board = () => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);
  const [cleaned, setCleaned] = useState(false);
  
  useEffect(() => {
    hasChecked && localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards, hasChecked])
  
  useEffect(() => {
    const cardData = localStorage.getItem('cards');

    if (cleaned) {
      localStorage.clear()
      setCards([])
      setCleaned(false)
    }
    else if (!cardData) {
      localStorage.setItem('cards', JSON.stringify(DEFAULT_CARDS));
      setCards(DEFAULT_CARDS);
    } else {
      setCards(JSON.parse(cardData));
    }

    setHasChecked(true);
  }, [cleaned])
  

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
      <section>
        <Trash setCards={setCards}/>
        <CleanedUp setCleaned={setCleaned} />
      </section>
    </div>
  )
}

export default Board
