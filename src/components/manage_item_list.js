import ManageItem from "./manage_item"

const ManageItemList = ({items, removeItem}) => {
  return (
    <>
      <span>
        My Items ({items.length})
      </span>
      {items.map((el, idx) => {
        return <ManageItem item={el} key={idx} removeItem={removeItem}/>
      })}
    </>
  )
}

export default ManageItemList