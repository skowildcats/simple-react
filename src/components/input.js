import { useState } from "react"

const Input = ({addItem}) => {
  const [input, setInput] = useState("")


  return (
    <form onSubmit={e => {e.preventDefault()
    addItem(input)
    setInput("")}}>
      <input value={input} type="text" onChange={e => setInput(e.currentTarget.value)}>
      </input>
      <button>
        Add item
      </button>
    </form>
  )
}

export default Input