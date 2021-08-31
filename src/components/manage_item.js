import { useContext} from "react"
import { ItemContext } from "../App"

const ManageItem = ({ item }) => {
  const removeItem = useContext(ItemContext)

  return (
    <div>
      {item.title}
      <button onClick={() => removeItem(item.id)}>x</button>
    </div>
  )
}

export default ManageItem
