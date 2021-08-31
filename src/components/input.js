import { useState } from "react"

const Input = ({ addItem }) => {
  const [input, setInput] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addItem(input)
        setInput("")
      }}
      id="input">
      <div>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.currentTarget.value)}></input>
        <button>Add item</button>
      </div>
    </form>
  )
}

export default Input
