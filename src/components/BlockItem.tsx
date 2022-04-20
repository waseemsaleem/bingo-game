import { FC, useState } from 'react'
import { ItemBlock, Item } from './BlockInterface'
const BlockItem: FC<ItemBlock> = ({ handleBlockChange, block }) => {
  const [changeChecked, setChecked] = useState(false)

  const markCheck = (item: Item) => {
    if (item.id === 12) {
      return
    } else if (changeChecked === false) {
      item.isChecked = true
      setChecked(true)
      handleBlockChange(item)
    }
  }

  return (
    <div
      className={changeChecked ? 'checked block' : 'block'}
      onClick={() => markCheck(block)}
    >
      <h6 className='block-text'>
        {block.text} {block.id}
      </h6>
    </div>
  )
}

export default BlockItem
