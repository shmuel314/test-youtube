import React, { useState,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import AddToCart from '../Components/AddToCart';
import './Item.css'


function Item() {
    const{id}=useParams();
    // const[item1,setItem1]=useState([])
    const loc = useLocation();
    const[item,setItem]=useState(loc.state)
    console.log(item);
        
    useEffect(() => {
        if(!item){
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then((data) => {
                setItem(data);
                console.log(data);
            })}
    }, [])

if(!item) return <></>
    return (
        <div className='item'>
            <div className="titleItem">{item.title}</div>
            <img className='imgItem' src={item.image} alt="shmuel" />
            <div className="descItem">{item.description}</div>
            <div> <h4 className='priceItem'>Only:{item.price} $</h4></div>
            <AddToCart item={item} id={item.id}/>
        </div>
    )

}

export default Item