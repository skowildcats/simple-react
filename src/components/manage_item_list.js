import ManageItem from "./manage_item"

const ManageItemList = ({ items }) => {
  return (
    <div id="item-list">
      <div>
        <span>My Items ({items.length})</span>
        {items.map((el, idx) => {
          return <ManageItem item={el} key={idx} />
        })}
      </div>
    </div>
  )
}

export default ManageItemList
