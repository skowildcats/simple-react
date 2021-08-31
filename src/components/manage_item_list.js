import ManageItem from "./manage_item"

const ManageItemList = ({ items, removeItem }) => {
  return (
    <div id="item-list">
      <div>
        <span>My Items ({items.length})</span>
        {items.map((el, idx) => {
          return <ManageItem item={el} key={idx} removeItem={removeItem} />
        })}
      </div>
    </div>
  )
}

export default ManageItemList
