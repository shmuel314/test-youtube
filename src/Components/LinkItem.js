import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart';

function LinkItem(props) {
  const item = props.item;
  const items = props.items
  // console.log(items);
  return (
    <div>
      <img className='imgProd' src={props.item.image} alt="shmuel" />
      <div className="titleProd">{props.item.title}</div>
      <Link to={props.where} state={{item:item}}><button className="btnProd">See More</button></Link>
      {/* <button>Add To Cart</button> */}
      <AddToCart items={items} item = {item} id = {item.id}/>
      <div> <h4 className='priceProd'>{props.item.price}</h4></div>

    </div>
  )
}

export default LinkItem