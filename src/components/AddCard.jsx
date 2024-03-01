import { useState } from "react"
import plus from '../assets/plus.svg'

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const hnadleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim().length) return

    const newCard = {
      id: Math.random().toString(),
      title: text.trim(),
      column
    }

    setCards((previous) => [...previous, newCard])
    setAdding(false)
  }

  return (
    <>
      {
        adding 
          ? 
          <form onSubmit={hnadleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Add a new task..."
              className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
            />
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-sm text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                Add
                <img src={plus} alt="plus icon" />
              </button>
            </div>
          </form> 
          
          : 
          <button
            onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <span>Add Card</span>
            <img src={plus} alt="plus icon" />
          </button>
      } 
    </>
  )
}

export default AddCard
