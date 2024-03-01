import broom from '../assets/broom.svg'

const CleanedUp = ({ setCleaned }) => {

  const cleanedUp = () => {
    localStorage.clear()
    setCleaned(true)
  }

  return (
    <button onClick={cleanedUp} className="mt-6 grid h-36 w-56 border border-neutral-500 bg-neutral-500/20 shrink-0 place-content-center rounded hover:bg-red-900/30 transition-colors">
      <img src={broom} alt="broom icon" />
    </button>
  )
}

export default CleanedUp
