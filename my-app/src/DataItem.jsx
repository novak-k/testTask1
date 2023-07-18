import './dataItem.css';

export const DataItem = ({dataItem}) => {
const {name, price, screen, capacity, ram, image} = dataItem;
  return (
    <div className="dataItemWrapper">
      <img
        className="dataItemPhoto"
        src={`https://mate-academy.github.io/react_phone-catalog/_new/${image}`} 
        alt="phone_photo" 
      />
      <p className="dataItemName">{name}</p>
      <p className="dataItemPrice">$ {price}</p>
      <div className="dataItemDescription">
        <div className="dataItemScreen">
          <span className="dataItemSpan">
            Screen
          </span> 
          {screen}
        </div>
        <div className="dataItemCapacity"><span className="dataItemSpan">Capacity</span> {capacity}</div>
        <div className="dataItemRam"><span className="dataItemSpan">RAM</span> {ram}</div>
      </div>
      <div className="dataItemBtnWrapper">
        <button className="dataItemBtn">Add to card</button>
        <button className="dataItemBtnHeart">
          <span className="fa fa-heart"></span>
        </button>
      </div>
    </div>
  )
}
