import { useState } from "react"
import Header from "./components/header"
import Input from "./components/input"
import ManageItemList from "./components/manage_item_list"
import { Box } from "@material-ui/core"
import "./style.css"
import React from "react"


export const ItemContext = React.createContext()

const App = (props) => {
  const [manageItem, setManageItem] = useState([])

  const addItem = (item) => {
    let copy = [...manageItem]
    copy = [
      ...copy,
      {
        id:
          manageItem.length === 0
            ? 1
            : manageItem[manageItem.length - 1].id + 1,
        title: item,
      },
    ]
    setManageItem(copy)
  }

  const removeItem = (id) => {
    let copy = [...manageItem].filter((el) => el.id !== id)
    setManageItem(copy)
  }

  return (
    <ItemContext.Provider value={removeItem}>
      <Box className="App" bgcolor="#e3f0f9">
        <Header />
        <Input addItem={addItem} />
        <ManageItemList items={manageItem} />
      </Box>
    </ItemContext.Provider>
  )
}

export default App
