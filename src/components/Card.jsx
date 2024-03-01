const Card = ({ id, title, column }) => {
  return (
    <>
      <div draggable="true" className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  )
}

export default Card
