import { useState } from "react";
import Column from "./Column"

const Board = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
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
    </div>
  )
}

export default Board
