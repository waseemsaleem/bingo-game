export interface ItemBlock {
  block: Item;
  handleBlockChange: (item: Item) => void
}
export interface Item {
  id: number;
  text: string;
  isChecked: boolean;
}
