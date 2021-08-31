const ManageItem = ({item, removeItem}) => {

  return (
    <div>
      {item.title}
      <button onClick={() => removeItem(item.id)}>
        x
      </button>
    </div>
  )
}

export default ManageItem