//import { Fragment } from "react";
import { useState } from "react";

interface ListGroupProps {
  //define propertis
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let selectedItemIndex = 0; //-1 no item, 0 first item selected
  //Hook
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null; //or can write driectly in the {}
  };
  //const handleClick = (event: MouseEvent) => console.log(event); //event handler

  //convert item to li - items.map((item) => <li>{item}</li>);
  // <Fragment> Instead of writing <div> as expecting 1 element - can also write as <>
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItemIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItemIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
